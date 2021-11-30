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
    await queryInterface.bulkInsert('users', [
      {
        name: 'Thiên Bá',
        email: 'thienba@gmail.com',
        password: '123456',
        phoneNumber: '031312122',
        type: 'ADMIN',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthZcF6C12-eMC0JrJdv4CWO40-emM4BBFlw&usqp=CAU',
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      },
      {
        name: 'Quốc Thiên',
        email: 'quocthien@gmail.com',
        password: '123456',
        phoneNumber: '031312122',
        type: 'CLIENT',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthZcF6C12-eMC0JrJdv4CWO40-emM4BBFlw&usqp=CAU',
        createdAt: '2021-02-02 03:30:00',
        updatedAt: '2021-02-02 03:30:00'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
