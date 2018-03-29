import * as http from 'http';
import * as debug from 'debug';
import App from './node-server';

debug('ts-express:server');

const port = 2000;
// Constants
const HOST = "0.0.0.0";
App.set('port', port);

const server = http.createServer(App);
server.listen(port, HOST, 3, onListening);
server.on('error', onError);

function normalizePort(val: number | string): number | string | boolean {
  let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  console.log(`Listening on ${bind}`);
}

function exitHandler(options, err) {
  // console.log("Exiting ", global.subscriptionARN);
  // if (global.subscriptionARN) {
  //   let cognitoAPI = new CognitoApi();
  //   cognitoAPI.unSubscribe((error) => {
  //     if (error) {
  //     }
  //     else {
  //       console.log("unSubscribed Successfully");
  //     }
  //     if (options.cleanup) console.log('clean');
  //     if (err) console.log(err.stack);
  //     if (options.exit) process.exit();
  //   });
  // }
  // else {
  //   if (options.cleanup) console.log('clean');
  //   if (err) console.log(err.stack);
  //   if (options.exit) process.exit();
  // }
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));