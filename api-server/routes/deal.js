const { body } = require('express-validator');
const { validateRequest } = require('@bonnak/toolset');
const { Deal } = require('../models').models;
const { requireAuth } = require('../middleware/authenticate');

module.exports = (router) => {
  router.post(
    '/deals',
    requireAuth(),
    validateRequest([
      body('title').notEmpty().withMessage('Required'),
      body('body').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const deal = await Deal.create({
        ...req.body,
        userId: req.user.id,
      });

      res.status(201).json(deal);
    },
  );

  router.put(
    '/deals/:id',
    requireAuth(),
    validateRequest([
      body('title').notEmpty().withMessage('Required'),
      body('body').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const deal = await Deal.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (deal === null) {
        return res.status(404).json({ message: "Deal doesn't exist" });
      }

      await deal.update(req.body);

      res.json(deal);
    },
  );

  router.delete('/deals/:id', requireAuth(), async (req, res) => {
    const deal = await Deal.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (deal === null) {
      return res.status(404).json({ message: "Deal doesn't exist" });
    }

    await deal.destroy();

    res.end();
  });

  router.get('/deals', async (req, res) => {
    const { count, rows } = await Deal.findAndCountAll({
      distinct: true,
      order: [['createdAt', 'desc']],
    });

    res.json({ count, rows });
  });

  router.get('/deals/:id', async (req, res) => {
    const deal = await Deal.findOne({
      where: { id: req.params.id },
    });

    res.json(deal);
  });
};
