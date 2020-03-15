'use strict';


module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tournaments', [{
      name : 'tournaments1'
    },
    {
      name : 'tournaments2'
    },
    {
      name : 'tournaments3'
    }], {});
  }
};