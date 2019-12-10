// import { Request, Response, NextFunction, Router } from 'express';
import express from 'express'
import { PermissionController } from '../controllers/permissionControlller'
import CheckAuth from '../middleware/checkAuth';
import { request } from 'http';


class PermissionRouter{
    public router: express.Router;
    permissionController = new PermissionController();
    CheckAuth = new CheckAuth().checkAuth;

    constructor(){
        this.router = express.Router();
        this.routes();
    }

    routes(){
        try {
             this.router.get('/',this.CheckAuth('view_role'),this.permissionController.getPermissions);
            //  this.router.post('/createUser', this.CheckAuth('user_create'),this.userController.createUsers);
            //  this.router.put('/updateUsers/:id',this.userController.updateUsers);
            //  this.router.delete('/deleteUsers/:id',this.userController.deleteUsers);
            //  this.router.post('/login',this.userController.userLogin);
         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const permissionRouter = new PermissionRouter();
export default permissionRouter.router;