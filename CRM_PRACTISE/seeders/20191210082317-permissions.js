'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('permissions', [{
      name : 'create_user',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'update_user',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'delete_user',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'view_user',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'create_role',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'update_role',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'delete_role',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'view_role',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('permissions', [{
      
    }])
  }
};