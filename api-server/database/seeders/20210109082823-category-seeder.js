const _ = require('lodash');

const mainCategories = [
  { name: 'Electrical & Electronic' },
  { name: 'Computing' },
  { name: 'Gaming' },
  { name: 'Groceries' },
  { name: 'Health & Beauty' },
  { name: 'Home & Garden' },
  { name: 'Fashions & Apparel' },
  { name: 'Mobiles' },
  { name: 'Alcohols' },
  { name: 'Automotive' },
  { name: 'Books & Mogazines' },
  { name: 'Dinning & Takeaway' },
  { name: 'Education' },
  { name: 'Entertainment' },
  { name: 'Financial' },
  { name: 'Internet' },
  { name: 'Pets' },
  { name: 'Sport & Outdoors' },
  { name: 'Toys & Kids' },
  { name: 'Travel' },
  { name: 'Other' },
];

async function insertCategories(queryInterface, categories, parentId = null) {
  const initialId = await queryInterface.bulkInsert(
    'Categories',
    categories.map((c) => ({
      name: c.name,
      slug: _.kebabCase(c.name),
      parentId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })),
    {},
  );

  await Promise.all(
    categories.map((c, index) => {
      if (c.subCategories) {
        return insertCategories(queryInterface, c.subCategories, index + initialId);
      }

      return [];
    }),
  );
}

module.exports = {
  up: async (queryInterface) => {
    await insertCategories(queryInterface, mainCategories);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, { truncate: true });
  },
};
