"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "nids",
      [
        {
          nid_number: "123456781",
          user_id: 1
        },
        {
          nid_number: "123456782",
          user_id: 2
        },
        {
          nid_number: "123456783",
          user_id: 3
        },
        {
          nid_number: "123456784",
          user_id: 4
        }
      ],
      {}
    );
  }
};
