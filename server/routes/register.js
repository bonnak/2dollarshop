const { body } = require('express-validator');
const { validateRequest } = require('@bonnak/toolset');
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
      const { email, password } = req.body;console.log(email, password)

      const user = await User.register({ email, password });

      return res.json(user);
    },
  );
};
