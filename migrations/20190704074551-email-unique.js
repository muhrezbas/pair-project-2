'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Admins', ['email'], {
      type: 'unique',
      name: 'email_unique'
    });
  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.removeConstraint('Admins', 'email_unique',{});
  }
};
