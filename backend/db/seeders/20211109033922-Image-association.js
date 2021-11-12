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
      },
      {
        carId: 3,
        url:"https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80"
      },
      {
        carId: 4,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      },
      {
        carId: 5,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      },
      {
        carId: 6,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      },
      {
        carId: 7,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      },
      {
        carId: 8,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      },
      {
        carId: 9,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      },
      {
        carId: 10,
        url:"https://images.unsplash.com/photo-1622943998889-49fc5c0cb477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"
      }
    ],
    {}
  )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
