import Sequelize = require("sequelize");
import sequelize from "../database/connection";
import bcrypt from "bcrypt";

export default sequelize.define(
  "new_views",
  {
    name: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true
    },
  }
);
