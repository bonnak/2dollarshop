const { body } = require('express-validator');
const { validateRequest } = require('@bonnak/toolset');
const { Post } = require('../models').models;
const { requireAuth } = require('../middleware/authenticate');

module.exports = (router) => {
  router.post(
    '/posts',
    requireAuth(),
    validateRequest([
      body('title').notEmpty().withMessage('Required'),
      body('body').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const post = await Post.create({
        ...req.body,
        userId: req.user.id,
      });

      res.status(201).json(post);
    },
  );

  router.put(
    '/posts/:id',
    requireAuth(),
    validateRequest([
      body('title').notEmpty().withMessage('Required'),
      body('body').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const post = await Post.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (post === null) {
        return res.status(404).json({ message: "Post doesn't exist" });
      }

      res.json(post);
    },
  );

  router.delete(
    '/posts/:id',
    requireAuth(),
    async (req, res) => {
      const post = await Post.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (post === null) {
        return res.status(404).json({ message: "Post doesn't exist" });
      }

      await post.destroy();

      res.end();
    },
  );

  router.get(
    '/posts',
    async (req, res) => {
      const { count, rows } = await Post.findAndCountAll();

      res.json({ count, rows });
    },
  );

  router.get(
    '/posts/:id',
    async (req, res) => {
      const post = await Post.findOne({
        where: { id: req.params.id },
      });

      res.json(post);
    },
  );
};
