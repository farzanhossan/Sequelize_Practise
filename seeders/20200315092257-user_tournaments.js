'use strict';


module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_tournaments', [{
      user_id: 1,
      tournament_id: 1
    },
    {
      user_id: 1,
      tournament_id: 2
    },
    {
      user_id: 2,
      tournament_id: 3
    }], {});
  }
};