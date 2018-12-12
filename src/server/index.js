'use strict';

// Configuration
require('dotenv').config();

// Imports
const
  fs = require('fs'),
  http = require('http'),
  https = require('https'),
  SocketIo = require('socket.io'),
  express = require('express'),
  initTables = require('./db/initTables');

/**
 * Create either an HTTP or HTTPS server
 * @param app { express }
 * @return {http.Server|express.Server}
 */
function createServer(app) {
  let server;
  if (process.env.NODE_ENV === 'production') {
    // Create an HTTP server that redirects to HTTPS
    const httpServer = http.createServer((req, res) => {
      res.writeHead(302, {Location: `https://${req.headers.host}${req.url}`}).end();
    });
    // Create an HTTPS server that serves the Express app
    server = https.createServer(
      {
        key: fs.readFileSync(process.env.httpsKeyPath),
        cert: fs.readFileSync(process.env.httpsCertPath),
        ca: fs.readFileSync(process.env.httpsCaPath)
      },
      app);

    // Listen on servers
    server
      .listen(process.env.httpsPort || 443, () => {
        console.log(`Talkie secure listening on: ${server.address().port}`);
      });
    httpServer
      .listen(process.env.httpPort || 80, () => {
        console.log(`Talkie listening on ${httpServer.address().port} for HTTPS redirect`);
      });
  } else {
    server = app.listen(process.env.httpPort || 8080, () => {
      console.log(`Talkie development listening on ${server.address().port}`);
    });
  }
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
  require("./routes")(app, io, tables);
}

main();