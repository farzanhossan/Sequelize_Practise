"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.default = connection_1.default.define("user_tournaments", {
    id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    tournament_id: {
        type: Sequelize.INTEGER(),
        allowNull: false
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date()
});
