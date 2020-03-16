import Sequelize = require("sequelize");
import sequelize from '../database/connection'
import bcrypt from "bcrypt";

export default sequelize.define("nids",{
    id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nid_number:{
        type: Sequelize.STRING(),
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
})


