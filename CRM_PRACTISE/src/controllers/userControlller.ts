import { Request , Response, Express} from 'express'
require('dotenv').config();
let jwt = require('jsonwebtoken');
import User from '../models/User'
import { any } from 'bluebird';
import bcrypt from "bcrypt";
import { request } from 'http';



export class UserController {
    
    
    /// Get All Users
    getUsers = async (req: any, res: any, next: any) => {
        try {
            const users = await User.findAll();
            return res.status(200).json({
                users
            })   
        } catch (error) {
            next(error)

        }
        
    }

    /// Create User
    createUsers = async (req: any, res: any, next: any) =>{
        try {
            let {name, email, password, phone_number, role_id} = req.body;
            const users = await User.create({name: name, email: email, password: password, phone_number: phone_number, role_id: role_id}).then(() => {
                return res.status(200).json({
                    message : "successfully Created"
                })   
            })
        } catch (error) {
            next(error)
        }
    }

    /// Update User
    updateUsers = async (req: any, res: any, next: any) =>{
        try {
            let id = req.params.id;
            let {name, email, password, phone_number, role_id} = req.body;
            const user = await User.update({name: name, email: email, password: password, phone_number: phone_number, role_id: role_id}, {where: {id: id}}).then(() => {
                return res.status(200).json({
                    message : "successfully Updated"
                }) 
            })
                
        } catch (error) {
            next(error)
        }
    }

    /// Delete User
    deleteUsers = async (req: any, res: any, next: any) =>{
        try {
            let id = req.params.id;
            const user = await User.destroy({where: {id: id}}).then(() => {
                return res.status(200).json({
                    message : "successfully Deleted"
                }) 
            })
        } catch (error) {
            next(error)
        }
         
    }

    /// User Login

    userLogin = async(req: any, res: any, next: any)=>{
        try {
            
        } catch (error) {
            next(error)
        }
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