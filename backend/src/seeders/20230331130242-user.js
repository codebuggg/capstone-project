'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      email: 'user@mail.com',
      password: 'password',
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
