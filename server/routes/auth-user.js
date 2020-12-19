const jwt = require('jsonwebtoken');
const { config } = require('@bonnak/toolset');
const { User } = require('../models').models;

const extractToken = (req) => {
  if (req.headers.authorization) {
    const [tokenType, token] = req.headers.authorization.split(' ');

    if (tokenType.toLowerCase() !== 'bearer') throw new Error();

    return token;
  }

  if (!req.session.jwt) throw new Error();

  return req.session.jwt;
};

module.exports = (router) => {
  router.get(
    '/auth/user',
    async (req, res) => {
      try {
        const token = extractToken(req); console.log(token);
        const { sub: userId } = jwt.verify(token, config.get('auth.jwt.secret'));

        const user = await User.findOne({
          where: {
            id: userId,
            disabled: false,
          },
        });

        if (user === null) return res.send(null);

        return res.json({
          user: {
            name: user.name,
            email: user.email,
          },
        });
      } catch (err) {
        res.send(null);
      }
    },
  );
};
