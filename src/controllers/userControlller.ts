require('dotenv').config();
let jwt = require('jsonwebtoken');
import User from '../models/User'
require('dotenv').config();
import bcrypt from "bcrypt";




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
            const users = await User.create({name, email, password, phone_number}).then(() => {
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
            const user = await User.update({name, email, password, phone_number}, {where: {id: id}}).then(() => {
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
            let {email , password } =req.body;
            let user =await User.findOne({ where: {email: email} });
            if (user == null) {
                return res.status(400).json({
                    message: "Please Register"
                })
            }
            let getStatus=await bcrypt.compare(password, user.password);
            let userId = {
                id : user.id
            }
            if (getStatus) {
                let token =jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '6h' });
                return res.status(200).json({
                    message: "Login Successful",
                    token: token
                })
            }else{
                return res.status(400).json({
                    message: "Email or Password Incorrect"
                })
            }
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