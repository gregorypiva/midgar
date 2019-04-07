import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
const bodyParser = require('body-parser');

const app  = express();

// Utilisation de bodyParser pour les params POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
})



/**
 * Create HTTP server.
 */

const server = (app: any) => {
  require('../src/routes')(app);
  const server = http.createServer(app);
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', onError);
  server.on('listening', () => {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  });
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening () {

}

export {
    app,
    server
}