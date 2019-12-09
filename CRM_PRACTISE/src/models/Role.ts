import Sequelize = require("sequelize");
import sequelize from '../database/connection'
import bcrypt from "bcrypt";

export default sequelize.define("roles",{
    id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
},{
    hooks: {
        beforeValidate: function(){

        },
        afterValidate: function(){

        },
        beforeCreate: function(){

        },
        afterCreate: function(){

        }
    }
})


