import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import pug from 'pug';
import session from 'express-session';
import sharedSession from 'express-socket.io-session';
import redis from 'redis';
import connectRedis from 'connect-redis';
import SocketIo from 'socket.io';

import {createPost, recentPosts} from './db/queryPosts.js';
import {authenticateUser} from './db/queryUsers';


const RedisStore = connectRedis(session);

const routes = (app, tables) => {
  app.get('*', async (req, res) => {
    const posts = await recentPosts(tables.Post, process.env.RECENT);
    res.render('base.pug', {
      title: process.env.TITLE,
      state: {
        username: req.session.username, // undefined in not logged in
        posts: posts
      }
    });
  });
};

const events = (io, tables) => {
  io.on('connection', socket => {
    sessionEvents(socket, tables);
    postEvents(io, socket, tables);
  });
};

/******** SESSION ********/
const sessionEvents = (socket, tables) => {
  socket.on('SESSION:BEGIN', async ({username, password}) => {
    const currentUsername = socket.handshake.session.username;
    if (currentUsername) {
      if (username !== currentUsername) {
        // logged in but trying to log in as a different username
        socket.emit('SESSION:ERROR');
      } else {
        // logged in and trying to log in as same username
        socket.emit('SESSION:LOGIN', {username: username});
      }
    } else {
      const authenticated = await authenticateUser(tables.User, username, password);
      if (authenticated) {
        socket.handshake.session.username = username;
        socket.handshake.session.save();
        socket.emit('SESSION:LOGIN', {username: username});
      } else {
        // rate-limiting - delay before sending error
        await (new Promise(resolve => setTimeout(resolve(), process.env.WRONG_PASS_DELAY || 1000)));
        socket.emit('SESSION:ERROR');
      }
    }
  });
  socket.on('SESSION:END', () => {
    socket.handshake.session.username = undefined;
    socket.handshake.session.save();
  });
};

/******** POSTS ********/
const postEvents = (io, socket, tables) => {
  socket.on('POST:CREATE', async ({text}) => {
    const username = socket.handshake.session.username;
    if (username) {
      const payload = await createPost(tables.Post, username, text);
      io.emit('POST:RECEIVE', payload); // send to ALL connected clients
    } else {
      socket.emit('POST:ERROR');
    }
  });
  socket.on('POSTS:REQUEST', async ({beginID}) => {
    beginID = Number(beginID) || undefined;
    const payload = await recentPosts(tables.Post, process.env.RECENT, beginID);
    socket.emit('POSTS:RECEIVE', {posts: payload});
  });
};

/**
 * Define all of the options and routes for the Express app,
 * and defines all of the Socket.io events emitted and responded to.
 * @param app { express }
 * @param io { SocketIo.Server }
 * @param tables { object } the SQL tables
 */
export default (app, io, tables) => {
  // Add all of the routes to the Express app
  if (process.env.NODE_ENV !== 'production') {
    app.use(logger('tiny'));
  }
  app.engine('pug', pug.__express);
  app.set('views', path.join(__dirname, 'template'));
  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(express.json());
  app.use(bodyParser.urlencoded({extended: true}));
  const expressSession = session({
    name: 'session',
    store: new RedisStore({
      url: process.env.REDIS_URI
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    cookie: {
      path: '/',
      secure: process.env.NODE_ENV === 'production'
    }
  });
  app.use(expressSession); // add session property to req
  io.use(sharedSession(expressSession, {autoSave: false})); // use same session property for io

  routes(app, tables);
  events(io, tables);
};