
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

const routes = app => {
  app.post('/v1/session', (req, res) => {
    
  });


  app.get('*', (req, res) => {
    res.render("base.pug", {
      title: "Talkie"
    });
  });
};

const events = io => {

};

/**
 * Define all of the options and routes for the Express app,
 * and defines all of the Socket.io events emitted and responded to.
 * @param app { express }
 * @param io { SocketIo.Server }
 */
module.exports = (app, io) => {
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
    cookie: {
      path: "/",
      secure: true
    }
  });
  app.use(expressSession); // add session property to req
  io.use(sharedSession(expressSession, { autoSave: false })); // use same session property for io

  routes(app);
  events(io);


  //io.on(/* ... */);
};