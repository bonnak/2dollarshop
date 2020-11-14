const { authenticated } = require('../middleware/authenticate');
const { RefreshToken, User } = require('../models').models;

module.exports = (router) => {
  router.post(
    '/auth/signout',
    authenticated,
    async (req, res) => {
      const user = await User.findByPk(req.user.id);
      const refreshToken = await RefreshToken.findOne({
        where: {
          userId: user.id,
          revoked: false,
        },
      });

      await refreshToken.revoke();

      return res.end();
    },
  );
};
