'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.addColumn('users', 'addColumn',Sequelize.STRING),
          queryInterface.addColumn('users', 'addColumn1',Sequelize.STRING),
          queryInterface.removeColumn('users', 'petName'),
          queryInterface.renameColumn('users', 'addColumn1', 'renameColumn1'),
          queryInterface.createTable("createTableTest", {
            id: {
              type: Sequelize.INTEGER(),
              allowNull: false,
              autoIncrement: true,
              primaryKey: true
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            deletedAt: Sequelize.DATE
          }),
          queryInterface.changeColumn('users', 'renameColumn1',Sequelize.INTEGER)
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
