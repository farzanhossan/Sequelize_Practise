import Sequelize = require("sequelize");
import sequelize from "../database/connection";
import bcrypt from "bcrypt";

export default sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(),
    allowNull: false
  },
  price: {
    type: Sequelize.STRING(),
    allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  deletedAt: Sequelize.DATE
});
