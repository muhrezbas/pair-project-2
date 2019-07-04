'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Admin extends Model {
    static associate(models){

    }
  }
  Admin.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid email format.'
        }
      }
    },
    password: DataTypes.STRING
  },{sequelize});

  Admin.beforeCreate((admin, options) => {
    const salt = 10;
    const newPassword = admin.password
    const hash = bcrypt.hashSync(newPassword, salt)
    admin.password = hash
  })
  return Admin;
};