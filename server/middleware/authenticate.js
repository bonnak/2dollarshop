const jwt = require('jsonwebtoken');
const { config, NotAllowError } = require('@bonnak/toolset');
const { User, AccessToken } = require('../models').models;

const fnUnAuthorizedReqResponse = (res) => res.status(401).json({
  message: 'Unauthorized request',
});

const extractToken = (req) => {
  if (req.headers.authorization) {
    const [tokenType, token] = req.headers.authorization.split(' ');

    if (tokenType.toLowerCase() !== 'bearer') throw new NotAllowError();

    return token;
  }

  if (!req.session.jwt) throw new NotAllowError();

  return req.session.jwt;
};

const requireAuth = () => async (req, res, next) => {
  try {
    const token = extractToken(req);
    const { sub: userId } = jwt.verify(token, config.get('auth.jwt.secret'));

    const user = await User.findOne({
      where: {
        id: userId,
        disabled: false,
      },
    });

    if (user === null) return fnUnAuthorizedReqResponse(res);

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    fnUnAuthorizedReqResponse(res);
  }
};

exports.requireAuth = requireAuth;
