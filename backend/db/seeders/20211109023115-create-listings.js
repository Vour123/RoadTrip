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
      },
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "Audi RS5",
        tags: "Audi",
        price: 100
      },
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 190
      },
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
      ,
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
      ,
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
      ,
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
      ,
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
      ,
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
      ,
      {
        userId: 1,
        city: "McAllen",
        state: "Texas",
        country: "USA",
        name: "BMW M3",
        tags: "BMW",
        price: 175
      }
    ],
    {}
  );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cars', null, {});
  }
};
