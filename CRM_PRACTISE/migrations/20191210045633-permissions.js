'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("permissions", {
      id:{
          type: Sequelize.INTEGER(),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      name:{
          type: Sequelize.STRING(),
          allowNull: false,
          unique: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("permissions")
  }
};
