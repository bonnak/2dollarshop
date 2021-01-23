const { body } = require('express-validator');
const { validateRequest } = require('@bonnak/toolset');
const { Comment } = require('../models').models;
const { requireAuth } = require('../middleware/authenticate');

module.exports = (router) => {
  router.post(
    '/comments',
    requireAuth(),
    validateRequest([
      body('postId').notEmpty().withMessage('Required'),
      body('body').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const comment = await Comment.create({
        ...req.body,
        userId: req.user.id,
      });

      res.status(201).json(comment);
    },
  );

  router.put(
    '/comments/:id',
    requireAuth(),
    validateRequest([
      body('postId').notEmpty().withMessage('Required'),
      body('body').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const comment = await Comment.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (comment === null) {
        return res.status(404).json({ message: "Comment doesn't exist" });
      }

      res.json(comment);
    },
  );

  router.delete(
    '/comments/:id',
    requireAuth(),
    async (req, res) => {
      const comment = await Comment.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (comment === null) {
        return res.status(404).json({ message: "Comment doesn't exist" });
      }

      await comment.destroy();

      res.end();
    },
  );

  router.get(
    '/comments',
    async (req, res) => {
      const { count, rows } = await Comment.findAndCountAll();

      res.json({ count, rows });
    },
  );

  router.get(
    '/comments/:id',
    async (req, res) => {
      const comment = await Comment.findOne({
        where: { id: req.params.id },
      });

      res.json(comment);
    },
  );
};
