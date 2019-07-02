'use strict';
module.exports = (sequelize, DataTypes) => {
  const Peripheral = sequelize.define('Peripheral', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Peripheral.associate = function(models) {
    // associations can be defined here
  };
  return Peripheral;
};