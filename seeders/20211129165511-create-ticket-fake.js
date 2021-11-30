'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tickets', [
      {
        user_id: 1,
        trip_id: 2,
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      },
      {
        user_id: 2,
        trip_id: 4,
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      },
      {
        user_id: 1,
        trip_id: 3,
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
