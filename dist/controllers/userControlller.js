"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
let jwt = require("jsonwebtoken");
const User_1 = __importDefault(require("../models/User"));
const Tournament_1 = __importDefault(require("../models/Tournament"));
const Product_1 = __importDefault(require("../models/Product"));
const RelatedProduct_1 = __importDefault(require("../models/RelatedProduct"));
const UserTournaments_1 = __importDefault(require("../models/UserTournaments"));
const Country_1 = __importDefault(require("../models/Country"));
const Nid_1 = __importDefault(require("../models/Nid"));
require("dotenv").config();
const bcrypt_1 = __importDefault(require("bcrypt"));
const multer_1 = require("../helper/multer");
var fs = require('graceful-fs');
// var multer = require('multer')
// var upload = multer({ dest: 'uploads/' }).single('files');
class UserController {
    constructor() {
        /// Belongs-To-Many
        this.test = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const file = fs.readFileSync('comparison.docx');
                return res.status(200).json({
                    file
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Belongs-To-Many
        this.belongsToMany = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                /// Relation
                User_1.default.belongsToMany(Tournament_1.default, {
                    through: UserTournaments_1.default,
                    foreignKey: "user_id",
                    foreignKeyConstraint: true
                });
                Tournament_1.default.belongsToMany(User_1.default, {
                    through: UserTournaments_1.default,
                    foreignKey: "tournament_id",
                    foreignKeyConstraint: true
                });
                ///
                let user = yield User_1.default.findOne({
                    where: { id: 2 },
                    include: {
                        model: Tournament_1.default,
                        through: {
                            attributes: []
                        }
                    }
                });
                return res.status(200).json({
                    user
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Belongs-To-Many Products
        this.selfJoin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                /// Relation
                Product_1.default.belongsToMany(Product_1.default, {
                    through: RelatedProduct_1.default,
                    as: 'Related_Product',
                    foreignKey: 'product_id'
                });
                Product_1.default.belongsToMany(Product_1.default, {
                    through: RelatedProduct_1.default,
                    as: 'Product',
                    foreignKey: "related_product_id"
                });
                ///
                let product = yield Product_1.default.findAll({
                    include: {
                        model: Product_1.default,
                        as: "Related_Product",
                        through: {
                            attributes: []
                        }
                    }
                });
                return res.status(200).json({
                    product
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Belongs-To --- HasMany
        this.hasMany = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Relation
                User_1.default.belongsTo(Country_1.default, {
                    foreignKey: "country_id",
                    foreignKeyConstraint: true
                });
                Country_1.default.hasMany(User_1.default, {
                    foreignKey: "country_id",
                    foreignKeyConstraint: true
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
                let country = yield Country_1.default.findAll({
                    // where: { name: { [Op.in]: ['Bangladesh'] } },
                    include: {
                        model: User_1.default,
                    }
                });
                return res.status(200).json({
                    country
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
            }
            catch (error) {
                next(error);
            }
        });
        /// Belongs-To --- HasOne
        this.belongsTo = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                /// Relation
                User_1.default.belongsTo(Country_1.default, {
                    foreignKey: "country_id"
                });
                let user = yield User_1.default.findAll({
                    include: [Country_1.default]
                });
                return res.status(200).json({
                    user
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Belongs-To --- HasOne
        this.hasOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                /// Relation
                User_1.default.hasOne(Nid_1.default, {
                    as: 'EID',
                    foreignKey: "user_id",
                });
                let users = yield User_1.default.findOne({
                    where: { id: 2 },
                    include: [
                        {
                            model: Nid_1.default,
                            as: "EID"
                        }
                    ],
                    raw: true,
                    required: false
                });
                return res.status(200).json({
                    users
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Get All Users
        this.getUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.findAll();
                return res.status(200).json({
                    users
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Create User
        this.createUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // let fileInfo = await new Promise(function(resolve, reject) {
                //   upload(req, res, (err: any) =>{
                //     if(err) reject(err);
                //     resolve(req.file)
                //   })
                // });
                let fileInfo = yield multer_1.fileUpload('files', req, res);
                console.log(req.file);
                let { name, email, password, country_id } = req.body;
                return res.status(200).json({
                    message: "successfully Created"
                });
                // upload.single(files);
                const users = yield User_1.default.create({ name, email, password, country_id }).then(() => {
                    return res.status(200).json({
                        message: "successfully Created"
                    });
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Update User
        this.updateUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let { name, email, password } = req.body;
                const user = yield User_1.default.update({ name, email, password }, { where: { id: id } }).then(() => {
                    return res.status(200).json({
                        message: "successfully Updated"
                    });
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// Delete User
        this.deleteUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const user = yield User_1.default.destroy({ where: { id: id } }).then(() => {
                    return res.status(200).json({
                        message: "successfully Deleted"
                    });
                });
            }
            catch (error) {
                next(error);
            }
        });
        /// User Login
        this.userLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, password } = req.body;
                let user = yield User_1.default.findOne({ where: { email: email } });
                if (user == null) {
                    return res.status(400).json({
                        message: "Please Register"
                    });
                }
                let getStatus = yield bcrypt_1.default.compare(password, user.password);
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
                }
                else {
                    return res.status(400).json({
                        message: "Email or Password Incorrect"
                    });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
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
