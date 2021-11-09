'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Images", 
    [
      {
        carId: 1,
        url:"https://images.unsplash.com/photo-1627508821199-5b89ca68a40d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"
      },
      {
        carId: 2,
        url:"https://images.unsplash.com/photo-1612956946912-b2d8e5fd65a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaSUyMHJzNXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ],
    {}
  )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
