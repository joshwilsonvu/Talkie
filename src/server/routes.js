
const
  path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  pug = require('pug'),
  session = require('express-session'),
  sharedSession = require("express-socket.io-session"),
  redis = require('redis'),
  RedisStore = require("connect-redis")(session),
  SocketIo = require("socket.io");

const { createPost, recentPosts } = require("./db/queryPosts");
const { authenticateUser } = require('./db/queryUsers');

const routes = (app, tables) => {
  app.get('*', async (req, res) => {
    const posts = await recentPosts(tables.Post, 100);
    res.render("base.pug", {
      title: process.env.title,
      state: {
        username: req.session.username, // undefined in not logged in
        posts: posts
      }
    });
  });
};

const events = (io, tables) => {
  io.on("connection", socket => {
    sessionEvents(socket, tables);
    postEvents(io, socket, tables);
  });
};

/******** SESSION ********/
const sessionEvents = (socket, tables) => {

  socket.on("SESSION:BEGIN", async ({username, password}) => {
    const currentUsername = socket.handshake.session.username;
    if (currentUsername && username !== currentUsername) {
      socket.emit("SESSION:ERROR");
      return;
    }
    const authenticated = await authenticateUser(tables.User, username, password);
    if (authenticated) {
      socket.handshake.session.username = username;
      socket.handshake.session.save();
      socket.emit("SESSION:LOGIN", {username: username});
    } else {
      socket.emit("SESSION:ERROR");
    }
  });
  socket.on("SESSION:END", () => {
    socket.handshake.session.username = undefined;
    socket.handshake.session.save();
  });
};

/******** POSTS ********/
const postEvents = (io, socket, tables) => {
  socket.on("POST:CREATE", async ({text}) => {
    const username = socket.handshake.session.username;
    if (username) {
      const payload = await createPost(tables.Post, username, text);
      io.emit("POST:RECEIVE", payload); // send to ALL connected clients
    } else {
      socket.emit("POST:ERROR");
    }
  });
  socket.on("POSTS:REQUEST", async ({beginID}) => {
    beginID = Number(beginID) || undefined;
    const payload = await recentPosts(tables.Post, 100, beginID);
    socket.emit("POSTS:RECEIVE", { posts: payload })
  });
};

/**
 * Define all of the options and routes for the Express app,
 * and defines all of the Socket.io events emitted and responded to.
 * @param app { express }
 * @param io { SocketIo.Server }
 * @param tables { object } the SQL tables
 */
module.exports = (app, io, tables) => {
  // Add all of the routes to the Express app
  if (process.env.NODE_ENV !== "production") {
    app.use(logger("dev"));
  }
  app.engine("pug", pug.__express);
  app.set("views", path.join(__dirname, "template"));
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const expressSession = session({
    name: "session",
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    cookie: {
      path: "/",
      secure: process.env.NODE_ENV === 'production'
    }
  });
  app.use(expressSession); // add session property to req
  io.use(sharedSession(expressSession, { autoSave: false })); // use same session property for io

  routes(app, tables);
  events(io, tables);
};