"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE VIEW user_views AS
    SELECT name, email
    FROM users
    WHERE country_id = 1;`);
  },

  // down: (queryInterface, Sequelize) => {
  //   return queryInterface.dropTable("user_views");
  // }
};
