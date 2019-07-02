'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProPeripheral = sequelize.define('ProPeripheral', {
    ProId: DataTypes.INTEGER,
    PeripheralId: DataTypes.INTEGER
  }, {});
  ProPeripheral.associate = function(models) {
    // associations can be defined here
  };
  return ProPeripheral;
};