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
    await queryInterface.bulkInsert('trips', [
      {
        fromStation: 1,
        toStation: 4,
        startTime: '2021-02-02 03:30:00',
        price: 290000,
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      },
      {
        fromStation: 1,
        toStation: 3,
        startTime: '2021-02-02 03:30:00',
        price: 290000,
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      },
      {
        fromStation: 1,
        toStation: 2,
        startTime: '2021-02-02 03:30:00',
        price: 290000,
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
    await queryInterface.bulkDelete('trips', null, {});
  }
};
