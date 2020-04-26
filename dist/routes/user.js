"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request, Response, NextFunction, Router } from 'express';
const express_1 = __importDefault(require("express"));
const userControlller_1 = require("../controllers/userControlller");
class UserRouter {
    constructor() {
        this.userController = new userControlller_1.UserController();
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        try {
            this.router.get('/', this.userController.getUsers);
            this.router.get('/test', this.userController.test);
            this.router.get('/belongsToMany', this.userController.belongsToMany);
            this.router.get('/selfJoin', this.userController.selfJoin);
            this.router.get('/hasMany', this.userController.hasMany);
            this.router.get('/belongsTo', this.userController.belongsTo);
            this.router.get('/hasOne', this.userController.hasOne);
            this.router.post('/create', this.userController.createUsers);
        }
        catch (error) {
            if (error)
                throw error;
        }
    }
}
const userRouter = new UserRouter();
exports.default = userRouter.router;
