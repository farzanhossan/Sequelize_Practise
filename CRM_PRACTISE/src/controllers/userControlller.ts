import { Request , Response, Express} from 'express'
require('dotenv').config();
let jwt = require('jsonwebtoken');
import User from '../models/User'
import { any } from 'bluebird';


export class UserController {
    
    
    errHandler = (req: any, res: any, err: any) => {
        return res.status(400).json({
            err
        });
    };

    
    /// Get All Users
    getUsers = async (req: any, res: any, err: any) => {
        const users = await User.findAll().catch(this.errHandler);
        return res.status(200).json({
            users
        })   
    }

    /// Create User
    createUsers = async (req: any, res: any, err: any) =>{
        let {name, email} = req.body;
        const users = await User.create({name: name, email: email}).then(() => {
            return res.status(200).json({
                message : "successfully Created"
            })   
        }).catch(this.errHandler)
         
    }

    /// Update User
    updateUsers = async (req: any, res: any, err: any) =>{
        let id = req.params.id;
        let {name, email} = req.body;
        const user = await User.update({name: name, email: email}, {where: {id: id}}).then(() => {
            return res.status(200).json({
                message : "successfully Updated"
            }) 
        }).catch(this.errHandler)
         
    }

    /// Delete User
    deleteUsers = async (req: any, res: any, err: any) =>{
        let id = req.params.id;
        const user = await User.destroy({where: {id: id}}).then(() => {
            return res.status(200).json({
                message : "successfully Deleted"
            }) 
        }).catch(this.errHandler)
         
    }
}

// async getUsers(req: any, res: any, err: any){
//     try{
//         const users = await User.findAll();
//         return res.status(200).json({
//             users
//         })  
//     }catch(err){
//         this.errHandler(req, res, err)
//     }
     
// }