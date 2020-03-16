import Sequelize = require("sequelize");
import sequelize from '../database/connection'
import bcrypt from "bcrypt";

export default sequelize.define("countries",{
    id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(),
        allowNull: false,
        validate: {
            len: {
                args: [4,30],
                msg: "Please Enter a name with at Least 4 chars but no more than 30"
            }
        }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
})


