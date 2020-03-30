"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Xiaomi note 8",
          price: '20000'
        },
        {
          name: "Samsung A2",
          price: '18000'
        },
        {
          name: "Samsung J7 Max",
          price: '24000'
        },
        {
          name: "OnePlus 5",
          price: '49000'
        },
        {
          name: "OnePlus 6",
          price: '57000'
        },
        {
          name: "Oppo F1",
          price: '29000'
        },
        {
          name: "Redmi K20 Pro",
          price: '32000'
        },
        {
          name: "Samsung J2",
          price: '8000'
        },
        {
          name: "Walton ZX2 Mini",
          price: '16000'
        },
        {
          name: "iPhone 8",
          price: '49000'
        },
        {
          name: "iPhone x",
          price: '82000'
        },
        {
          name: "iPhone 5s",
          price: '11000'
        }
      ],
      {}
    );
  }
};
