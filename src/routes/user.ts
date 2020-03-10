// import { Request, Response, NextFunction, Router } from 'express';
import express from 'express'
import { UserController } from '../controllers/userControlller'
import { request } from 'http';


class UserRouter{
    public router: express.Router;
    userController = new UserController();
    constructor(){
        this.router = express.Router();
        this.routes();

    }

    routes(){
        try {
             this.router.get('/',this.userController.getUsers);
         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const userRouter = new UserRouter();
export default userRouter.router;