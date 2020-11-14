const { body } = require('express-validator');
const { validateRequest } = require('@bonnak/toolset');
const { User } = require('../models').models;

module.exports = (router) => {
  router.post(
    '/users/signin',
    validateRequest([
      body('email').notEmpty().withMessage('Required'),
      body('password').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const { email, password } = req.body;

      const user = await User.attemptToAuthenticate({ email, password });
      const accessToken = await user.generateAccessToken();

      return res.json({ accessToken });
    },
  );
};
