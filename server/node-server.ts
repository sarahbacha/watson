import * as express from 'express';
import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';
// import * as expressSession from 'express-session';
import APIRoutes from './routes';
import * as path from 'path';
import * as fs from 'fs';
import * as request from 'request';
import * as response from 'response';
// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;
  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.config();
  }
  // Configure Express middleware.
  private middleware(): void {
    this.setAccessControlAllowOrigin();
  }
  private config():void {
    // ROUTES
    this.express.use('/route', APIRoutes(this.express));
  }
  private setAccessControlAllowOrigin(){
    // Add headers
    this.express.use(function(req, res, next) {
  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,organization_id,Authorization');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', "true");
  
      // Pass to next layer of middleware
      next();
    });
  }
}
export default new App().express;