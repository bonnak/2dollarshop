const { body } = require('express-validator');
const { validateRequest } = require('@bonnak/toolset');
const { User } = require('../models').models;

module.exports = (router) => {
  router.post(
    '/auth/signin',
    validateRequest([
      body('email').notEmpty().withMessage('Required'),
      body('password').notEmpty().withMessage('Required'),
    ]),
    async (req, res) => {
      const { email, password } = req.body;

      const user = await User.attemptToAuthenticate({ email, password });
      const accessToken = await user.generateAccessToken();

      req.session = {
        __refreshToken: await user.generateRefreshToken(),
      };

      return res.json({ 
        accessToken,
        user: {
          name: user.name,
          email: user.email,
        }
      });
    },
  );
};
