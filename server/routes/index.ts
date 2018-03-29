'use strict';

import * as Express from 'express';
import ChatRouteController from './chat';

export function serverRoutes(app: Express.Application): Express.Router {
    let router: Express.Router = Express.Router();
    router.use('/chat', ChatRouteController(app));
    return router;
}

export default serverRoutes;