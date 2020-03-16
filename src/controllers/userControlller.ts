require("dotenv").config();
let jwt = require("jsonwebtoken");
import User from "../models/User";
import Tournament from "../models/Tournament";
import UserTournaments from "../models/UserTournaments";
import Country from "../models/Country";
import Nid from "../models/Nid";
require("dotenv").config();
import bcrypt from "bcrypt";

export class UserController {
  /// Belongs-To-Many
  belongsToMany = async (req: any, res: any, next: any) => {
    try {
      /// Relation
      User.belongsToMany(Tournament, {
        through: UserTournaments,
        foreignKey: "user_id"
      });
      Tournament.belongsToMany(User, {
        through: UserTournaments,
        foreignKey: "tournament_id"
      });
      ///

      let user = await User.findOne({
        where: { id: 2 },
        include: [Tournament]
      });
      return res.status(200).json({
        user
      });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To --- HasMany
  hasMany = async (req: any, res: any, next: any) => {
    try {
      /// Relation
      User.belongsTo(Country, {
        foreignKey: "country_id"
      });
      Country.hasMany(User, {
        foreignKey: "country_id"
      });
      //

      ////Many To One
      // let user = await User.findAll({
      //   include: [Country]
      // });
      // return res.status(200).json({
      //   user
      // });

      //One To Many
      let country = await Country.findOne({
        where: { id: 1 },
        include: [User]
      });
      return res.status(200).json({
        country
      });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To --- HasOne
  belongsTo = async (req: any, res: any, next: any) => {
    try {
      /// Relation
      User.belongsTo(Country, {
        foreignKey: "country_id"
      });
      let user = await User.findAll({
        include: [Country]
      });
      return res.status(200).json({
        user
      });
    } catch (error) {
      next(error);
    }
  };

    /// Belongs-To --- HasOne
    hasOne = async (req: any, res: any, next: any) => {
      try {
        /// Relation
        User.hasOne(Nid, {
          foreignKey: "user_id"
        });
        let users = await User.findOne({
          where: {id: 2},
          include: [Nid]
        });
        return res.status(200).json({
          users
        });
      } catch (error) {
        next(error);
      }
    };

  /// Get All Users
  getUsers = async (req: any, res: any, next: any) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({
        users
      });
    } catch (error) {
      next(error);
    }
  };

  /// Create User
  createUsers = async (req: any, res: any, next: any) => {
    try {
      let { name, email, password } = req.body;
      const users = await User.create({ name, email, password }).then(() => {
        return res.status(200).json({
          message: "successfully Created"
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /// Update User
  updateUsers = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      let { name, email, password } = req.body;
      const user = await User.update(
        { name, email, password },
        { where: { id: id } }
      ).then(() => {
        return res.status(200).json({
          message: "successfully Updated"
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /// Delete User
  deleteUsers = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      const user = await User.destroy({ where: { id: id } }).then(() => {
        return res.status(200).json({
          message: "successfully Deleted"
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /// User Login

  userLogin = async (req: any, res: any, next: any) => {
    try {
      let { email, password } = req.body;
      let user = await User.findOne({ where: { email: email } });
      if (user == null) {
        return res.status(400).json({
          message: "Please Register"
        });
      }
      let getStatus = await bcrypt.compare(password, user.password);
      let userId = {
        id: user.id
      };
      if (getStatus) {
        let token = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "6h"
        });
        return res.status(200).json({
          message: "Login Successful",
          token: token
        });
      } else {
        return res.status(400).json({
          message: "Email or Password Incorrect"
        });
      }
    } catch (error) {
      next(error);
    }
  };
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
