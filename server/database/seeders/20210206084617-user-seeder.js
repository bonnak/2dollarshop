const { v4: uuidV4 } = require('uuid');
const bcrypt = require('bcryptjs');
const { config } = require('@bonnak/toolset');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidV4(),
        name: 'admin',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('secret', parseInt(config.get('auth.jwt.salt'))),
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, { truncate: true });
  }
};
