"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/camelcase */
// import {Winston} from '../../helper/winston/winston';
// const { resEnd } = require('./util');
var myModulePath = require("app-root-path").path;
exports.resSend = (fieldName, responseData, messageData, status, Boolean, res, filepath) => {
    //   const winstonInit = new Winston();
    //   const winston = winstonInit.logger('response.ts');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const message = { is_success: Boolean };
    message.message = messageData;
    if (typeof fieldName === "string") {
        message[fieldName] = responseData;
    }
    else {
        for (let i = 0; i < fieldName.length; i++) {
            message[fieldName[i]] = responseData[i];
        }
    }
    //   winston.info({status, message, transactionID: res.uniqID});
    // console.log('message', message);
    if (filepath) {
        return res.sendFile(`${myModulePath + filepath}`);
    }
    res.status(status);
    res.json(message);
    // resEnd(req);
    return res.end();
};
