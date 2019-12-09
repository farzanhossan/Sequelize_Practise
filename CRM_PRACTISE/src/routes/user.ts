// import { Request, Response, NextFunction, Router } from 'express';
import express from 'express'
import { UserController } from '../controllers/userControlller'
// import CheckAuth from '../middleware/checkAuth';
import { request } from 'http';


class UserRouter{
    public router: express.Router;
    userController = new UserController();
    // CheckAuth = new CheckAuth().checkAuth;


    constructor(){
        this.router = express.Router();
        this.routes();

    }

    routes(){
        try {
             this.router.get('/',this.userController.getUsers);
             this.router.post('/createUser',this.userController.createUsers);
             this.router.put('/updateUsers/:id',this.userController.updateUsers);
             this.router.delete('/deleteUsers/:id',this.userController.deleteUsers);

         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const userRouter = new UserRouter();
export default userRouter.router;