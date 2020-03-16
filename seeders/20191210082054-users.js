"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "super",
          email: "super@gmail.com",
          password:
            "$2b$10$RhOAo5ynvaW5zsRbSUs5wuHQIy5dNTFnIOtJyq/qKJgvBqMYjasBO",
          country_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "super1",
          email: "super1@gmail.com",
          password:
            "$2b$10$RhOAo5ynvaW5zsRbSUs5wuHQIy5dNTFnIOtJyq/qKJgvBqMYjasBO",
          country_id: 1,
          createdAt: Sequelize.DATETIME,
          updatedAt: new Date()
        },
        {
          name: "super2",
          email: "super2@gmail.com",
          password:
            "$2b$10$RhOAo5ynvaW5zsRbSUs5wuHQIy5dNTFnIOtJyq/qKJgvBqMYjasBO",
          country_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "super3",
          email: "super3@gmail.com",
          password:
            "$2b$10$RhOAo5ynvaW5zsRbSUs5wuHQIy5dNTFnIOtJyq/qKJgvBqMYjasBO",
          country_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  }
};
