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
    Car.hasMany(models.Review, {foreignKey:"carId", onDelete:"cascade", hooks:true});
    Car.hasMany(models.Booking, {foreignKey:"carId", onDelete:"cascade", hooks:true});
    Car.hasMany(models.Image, {foreignKey:"carId", onDelete:"cascade", hooks:true});
    Car.belongsTo(models.User, {foreignKey:"userId"});
  };
  return Car;
};