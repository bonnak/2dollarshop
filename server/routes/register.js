const { body } = require('express-validator');
const { validateRequest, config } = require('@bonnak/toolset');
const mailer = require('../transport/mailer');
const { User } = require('../models').models;

module.exports = (router) => {
  router.post(
    '/auth/register',
    validateRequest([
      body('email')
        .notEmpty().withMessage('Required')
        .custom(async (email) => {
          const count = await User.count({ where: { email } });

          if (count > 0) {
            throw new Error('Email already exist');
          }

          return true;
        }),
      body('password').notEmpty().withMessage('Required'),
      body('passwordConfirmation').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }

        return true;
      }),
    ]),
    async (req, res) => {
      const { email, password } = req.body;

      const user = await User.register({ email, password });

      mailer.send({
        from: '"2 dollar shop" <2dollarshop@mail.com>',
        to: req.body.email,
        subject: 'Confirm register',
        text: `
          Click this link to confirm your registration 
          ${config.get('appUrl')}/api/auth/confirm-register/${user.confirmCode}
        `,
      });

      return res.json(user);
    },
  );

  router.get(
    '/auth/confirm-register/:confirmCode',
    async (req, res) => {
      await User.confirmRegister({ confirmCode: req.params.confirmCode });

      res.json({ message: 'Confirm register successfully' });
    },
  );

  router.post(
    '/auth/login',
    validateRequest([
      body('email').notEmpty().withMessage('Email required'),
      body('password').notEmpty().withMessage('Password required'),
    ]),
    async (req, res) => {
      const user = await User.attemptToAuthenticate({
        email: req.body.email,
        password: req.body.password,
      });

      const { accessToken, refreshToken } = await user.generateAccessToken();

      res.json({ accessToken, refreshToken });
    },
  );
};
