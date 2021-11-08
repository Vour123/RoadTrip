'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    tags: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};