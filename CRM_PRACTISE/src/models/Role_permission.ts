import Sequelize = require("sequelize");
import sequelize from '../database/connection'
import bcrypt from "bcrypt";

export default sequelize.define("role_permissions",{
    id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    role_id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    },
    permission_id:{
        type: Sequelize.INTEGER(),
        allowNull: false,
        references: {
            model: 'permissions',
            key: 'id'
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
})


