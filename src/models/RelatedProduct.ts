import Sequelize = require("sequelize");
import sequelize from "../database/connection";
import bcrypt from "bcrypt";

export default sequelize.define("related_products", {
  id: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: Sequelize.INTEGER(),
    allowNull: false
  },
  related_product_id: {
    type: Sequelize.INTEGER(),
    allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  deletedAt: Sequelize.DATE
});
