"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "related_products",
      [
        {
          product_id: 1,
          related_product_id: 2
        },
        {
          product_id: 1,
          related_product_id: 3
        },
        {
          product_id: 2,
          related_product_id: 1
        },
        {
          product_id: 2,
          related_product_id: 4
        },
        {
          product_id: 5,
          related_product_id: 6
        },

      ],
      {}
    );
  }
};
