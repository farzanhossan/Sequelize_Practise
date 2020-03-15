import Sequelize = require("sequelize");
import sequelize from "../database/connection";
import bcrypt from "bcrypt";

export default sequelize.define("user_tournaments", {
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
