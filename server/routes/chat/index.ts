'use strict';

import * as path from 'path';
import * as Express from 'express';
import controller from './chat.route.controller';

export default function (app: Express.Application ): Express.Router {
    let router: Express.Router = Express.Router();
    controller.app = app;
    router.put('/send', controller.sendChat);
    return router;
}