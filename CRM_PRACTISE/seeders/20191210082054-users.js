'use strict';


module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name : 'super',
      email : 'super@gmail.com',
      password : '$2b$10$RhOAo5ynvaW5zsRbSUs5wuHQIy5dNTFnIOtJyq/qKJgvBqMYjasBO',
      phone_number: "123456789",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', [{
      email : 'super@gmail.com'
    }])
  }
};