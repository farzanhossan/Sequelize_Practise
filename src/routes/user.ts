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
             this.router.get('/belongsToMany',this.userController.belongsToMany);
             this.router.get('/selfJoin',this.userController.selfJoin);
             this.router.get('/hasMany',this.userController.hasMany);
             this.router.get('/belongsTo',this.userController.belongsTo);
             this.router.get('/hasOne',this.userController.hasOne);
             this.router.post('/create',this.userController.createUsers);
         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const userRouter = new UserRouter();
export default userRouter.router;