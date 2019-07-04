'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Admins', ['username'], {
      type: 'unique',
      name: 'username_unique'
    });
  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.removeConstraint('Admins', 'username_unique', {});
  }
};
