'use strict';

// Imports
import envalid from 'envalid';

process.env = envalid.cleanEnv(process.env, {
  PORT: envalid.port({default: 8080}),
  TITLE: envalid.str({default: "Talkie"}),
  RECENT: envalid.num({default: 30}),
  WRONG_PASS_DELAY: envalid.num({default: 1000}),
  SESSION_SECRET: envalid.str({devDefault: 'sUpErSeCrEt'}),
  SQL_URI: envalid.url(),
  REDIS_URI: envalid.url({default: 'redis://localhost'}),
  BCRYPT_COST_FACTOR: envalid.num({devDefault: 6, default: 12})
});

import http from 'http';
import SocketIo from 'socket.io'
import express from 'express';
import initTables from './db/initTables';
import routes from './routes';

/**
 * Create either an HTTP or HTTPS server
 * @param app { express }
 * @return {http.Server|express.Server}
 */
function createServer(app) {
  // Listen on server
  let server = app.listen(process.env.PORT || 8080, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Talkie listening on ${server.address().port}`);
  });
  return server;
}

async function main() {
  // Create the Express app, where all the routing happens
  const app = express();
  // Create the HTTP/HTTPS server
  const server = createServer(app);
  // Upgrade the server to be able to use websockets
  const io = SocketIo(server);
  // Gain access to the database tables
  const tables = await initTables();
  // Define how the Express app and SocketIO upgrade work
  routes(app, io, tables);
}

main();
