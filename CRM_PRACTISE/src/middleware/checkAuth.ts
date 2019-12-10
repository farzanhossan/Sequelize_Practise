import { Request , Response, Express} from 'express'
let jwt = require('jsonwebtoken');
import User from '../models/User'
import Permission from '../models/Permission'
import RolePermission from '../models/Role_permission'

export default class CheckAuth{

    checkAuth(option: any){
        return async (req: any,res: any ,next: any)=>{
            try {
                const accesstoken = req.headers['authorization'];
                if (accesstoken == null) {
                    return res.status(403).json({
                    message: "Token Not Exist"
                    })
                }
                const token = accesstoken.split(' ')[1];
                let tokenId = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
                let user = await User.findOne({ where: {id: tokenId.id}})
                if(user == null){
                    return res.status(403).json({
                        message: 'Please Login First',
                    })
                }
                let rolePermission = await RolePermission.findAll({where: {role_id: user.role_id}})
                let permission = await Permission.findOne({where: {name: option}})
                for(let i=0;i<rolePermission.length;i++){
                    if (rolePermission[i].permission_id == permission.id) {
                        req.userData = tokenId;
                        return next();
                    }
                }
                return res.status(400).json({
                    message: "You Are Not Allowed"
                })
            } catch (error) {
                if(error) next(error);
            }
        }
    } 
}