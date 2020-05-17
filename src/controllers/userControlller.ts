require("dotenv").config();
let jwt = require("jsonwebtoken");
import User from "../models/User";
import UserView from "../models/UserView";
import Tournament from "../models/Tournament";
import Product from "../models/Product";
import RelatedProduct from "../models/RelatedProduct";
import UserTournaments from "../models/UserTournaments";
import Country from "../models/Country";
import Nid from "../models/Nid";
require("dotenv").config();
import bcrypt from "bcrypt";
import { fileUpload } from "../helper/multer";
import { FcmNotification } from "../helper/fcm";
import { TimeSchedule } from "../helper/scheduler";
import { responseFile } from "../helper/file";
import { resSend } from "../helper/response";
import { Sequelize } from "sequelize";
var schedule = require("node-schedule");

var fs = require("graceful-fs");
// var multer = require('multer')
// var upload = multer({ dest: 'uploads/' }).single('files');

export class UserController {
  /// Belongs-To-Many
  test = async (req: any, res: any, next: any) => {
    try {
      // // File read
      // const file = fs.readFileSync('comparison.docx');
      // return res.status(200).json({
      //   file
      // });

      // const util = await generateMifeToken();
      // return res.status(200).json({
      //   status: util.statusCode,
      //   body:  JSON.parse(util.body)
      // });
      ///
      // const user = await sequelize.query(
      //   'SELECT * FROM new_view',
      //   {
      //     type: QueryTypes.SELECT
      //   }
      // );

      // const user = await UserView.findAll({
      //   where : { email: 'super@gmail.com'},
      //   attributes:['name', 'email']
      // });

      // const fcm = await FcmNotification();
      // return res.status(200).json({
      //   fcm
      // });
      // const t =new Promise(async(resolve)=>{
      //   await schedule.scheduleJob("*/1 * * * *", async () => {
      //     let user = await User.findOne({
      //       where: { id: 1 },
      //     });
      //     console.log(user);
      //     resolve(user);
      //   });

      // });
      const filePath = "/index.html";
      // var myModulePath = require("app-root-path").path;

      // const filePath = path.join('/src/controllers/index.html', { root: __dirname });
      // console.log(`${myModulePath + filePath}`);
      // res.sendFile(`${myModulePath+filePath}`)
      return resSend(
        "Test",
        "ResponseData",
        "message",
        200,
        true,
        res,
        filePath
      );
      // const t = await responseFile(res);
      // return res.status(200).json({
      //   t: JSON.stringify(t)
      // });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To-Many
  belongsToMany = async (req: any, res: any, next: any) => {
    try {
      /// Relation
      User.belongsToMany(Tournament, {
        through: UserTournaments,
        foreignKey: "user_id",
        foreignKeyConstraint: true,
      });
      Tournament.belongsToMany(User, {
        through: UserTournaments,
        foreignKey: "tournament_id",
        foreignKeyConstraint: true,
      });
      ///

      let user = await User.findOne({
        where: { id: 2 },
        include: {
          model: Tournament,
          through: {
            attributes: [],
          },
        },
      });
      return res.status(200).json({
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To-Many Products
  selfJoin = async (req: any, res: any, next: any) => {
    try {
      /// Relation
      Product.belongsToMany(Product, {
        through: RelatedProduct,
        as: "Related_Product",
        foreignKey: "product_id",
      });

      Product.belongsToMany(Product, {
        through: RelatedProduct,
        as: "Product",
        foreignKey: "related_product_id",
      });
      ///

      let product = await Product.findAll({
        include: {
          model: Product,
          as: "Related_Product",
          through: {
            attributes: [],
          },
        },
      });
      return res.status(200).json({
        product,
      });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To --- HasMany
  hasMany = async (req: any, res: any, next: any) => {
    try {
      // Relation
      User.belongsTo(Country, {
        foreignKey: "country_id",
        foreignKeyConstraint: true,
      });
      Country.hasMany(User, {
        foreignKey: "country_id",
        foreignKeyConstraint: true,
      });
      //

      // //Many To One
      // let user = await User.findAll({
      //   include: [{
      //     model: Country,
      //     where: { name: { [Op.in]: ['Bangladesh','India'] } }
      //   }]
      // });
      // return res.status(200).json({
      //   user
      // });

      //One To Many
      let country = await Country.findAll({
        // where: { name: { [Op.in]: ['Bangladesh'] } },
        include: {
          model: User,
        },
      });
      return res.status(200).json({
        country,
      });

      //Sub-Query
      // const users = await sequelize.query("SELECT * FROM `users` where country_id IN ('1')",
      // { type: QueryTypes.SELECT });

      // const product = await BannerProduct.findAll({
      //         attributes: ['product_id']
      //       }).map((data: any) => data.get())

      // const user = await User.findAll({
      //   where: {
      //     country_id: {
      //       [Op.in]: await Country.findAll({
      //         attributes: ['id']
      //       }).map((country_id: any) => country_id.get("id"))
      //     }
      //   }
      // });
      // const productList = await Products.findAll({
      //   where: {
      //     deleted_at: {[Op.eq]: null},
      //     id: {
      //       [Op.in]: await BannerProduct.findAll({
      //         attributes: ['product_id']
      //       }).map((data: any) => data.get("product_id"))
      //     }
      //   },
      //   include:{
      //     model: BannerProduct,
      //     order: [['id']],
      //     attributes:[]
      //   }
      // });

      // return res.status(200).json({
      //   productList
      // });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To --- HasOne
  belongsTo = async (req: any, res: any, next: any) => {
    try {
      /// Relation
      User.belongsTo(Country, {
        foreignKey: "country_id",
      });
      let user = await User.findAll({
        include: [Country],
      });
      return res.status(200).json({
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  /// Belongs-To --- HasOne
  case = async (req: any, res: any, next: any) => {
    try {
      const user = await User.findAll({
        attributes: [
          [
            Sequelize.literal(
              `CASE 
                  WHEN country_id > 1 THEN 1 
                  ELSE "Not Found"
              END`
            ),
            "country_id",
          ],
        ],
      });
      return res.status(200).json({
        user,
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
        as: "EID",
        foreignKey: "user_id",
      });
      let users = await User.findOne({
        where: { id: 2 },
        include: [
          {
            model: Nid,
            as: "EID",
          },
        ],
        raw: true,
        required: false,
      });
      return res.status(200).json({
        users,
      });
    } catch (error) {
      next(error);
    }
  };

  /// Get All Users
  getUsers = async (req: any, res: any, next: any) => {
    try {
      const users = await User.findAll();
      console.log("users");
      return res.status(200).json({
        users,
      });
    } catch (error) {
      return next(error);
    }
  };

  /// Create User
  createUsers = async (req: any, res: any, next: any) => {
    try {
      // let fileInfo = await new Promise(function(resolve, reject) {
      //   upload(req, res, (err: any) =>{
      //     if(err) reject(err);
      //     resolve(req.file)
      //   })
      // });
      let fileInfo: any = await fileUpload("files", req, res);
      console.log(req.file);
      let { name, email, password, country_id } = req.body;
      return res.status(200).json({
        message: "successfully Created",
      });

      // upload.single(files);
      const users = await User.create({
        name,
        email,
        password,
        country_id,
      }).then(() => {
        return res.status(200).json({
          message: "successfully Created",
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
          message: "successfully Updated",
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
          message: "successfully Deleted",
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
          message: "Please Register",
        });
      }
      let getStatus = await bcrypt.compare(password, user.password);
      let userId = {
        id: user.id,
      };
      if (getStatus) {
        let token = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "6h",
        });
        return res.status(200).json({
          message: "Login Successful",
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "Email or Password Incorrect",
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

// var options = {
//   include: etc
// };
// Sequelize.Model.validateIncludedElements(options);
// sequelize.query(q,Post, options).done(function(err,posts){
//     console.error(posts[0])
// })
