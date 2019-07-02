'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pro = sequelize.define('Pro', {
    name: DataTypes.STRING,
    born: DataTypes.DATE,
    team: DataTypes.STRING,
    dpi: DataTypes.INTEGER,
    edpi: DataTypes.INTEGER,
    sensitivity: DataTypes.INTEGER,
    hz: DataTypes.INTEGER,
    zoom_sens: DataTypes.INTEGER,
    mouse_accel: DataTypes.INTEGER,
    raw_input: DataTypes.INTEGER,
    crosshair: DataTypes.STRING,
    view_model: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pro.associate = function(models) {
    // associations can be defined here
  };
  return Pro;
};