const { Category } = require('../models').models;

module.exports = (router) => {
  router.get(
    '/categories',
    async (req, res) => {
      const { count, rows } = await Category.findAndCountAll();

      res.json({ count, rows });
    },
  );
};
