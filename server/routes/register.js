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
          ${config.get('appUrl')}/auth/confirm-register/${user.confirmCode}
        `,
      });

      return res.json(user);
    },
  );
};
