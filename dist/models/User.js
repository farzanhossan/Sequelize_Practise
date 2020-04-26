"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = connection_1.default.define("users", {
    id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(),
        allowNull: false,
        validate: {
            len: {
                args: [4, 30],
                msg: "Please Enter a name with at Least 4 chars but no more than 30"
            }
        }
    },
    email: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(),
        allowNull: false,
        validate: {
            len: {
                args: [6, 14],
                msg: "Please Enter a password with at Least 6 chars but no more than 14"
            }
        }
    },
    country_id: {
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
}, {
    hooks: {
        beforeValidate: function () { },
        afterValidate: function (user) {
            user.password = bcrypt_1.default.hashSync(user.password, 8);
        },
        beforeCreate: function () { },
        afterCreate: function () { }
    }
});
