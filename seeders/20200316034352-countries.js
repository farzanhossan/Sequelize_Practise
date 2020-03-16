'use strict';


module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('countries', [{
      name : 'Bangladesh'
    },
    {
      name : 'India'
    },
    {
      name : 'Pakistan'
    },
    {
      name : 'America'
    },
    {
      name : 'Africa'
    }], {});
  }
};