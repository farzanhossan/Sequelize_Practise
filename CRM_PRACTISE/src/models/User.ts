import Sequelize = require("sequelize");
import { UserController } from "../controllers/userControlller";
import sequelize from '../database/connection'

export default sequelize.define("users",{
    id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(),
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
})


