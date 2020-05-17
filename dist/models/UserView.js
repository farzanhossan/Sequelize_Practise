"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.default = connection_1.default.define("new_views", {
    name: {
        type: Sequelize.STRING(),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
    },
});
