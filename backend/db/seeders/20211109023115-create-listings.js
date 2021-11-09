'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cars",
    [
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "Audi RS3",
        tags: "Audi",
        price: 50
      }
    ],
    {}
  );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cars', null, {});
  }
};
