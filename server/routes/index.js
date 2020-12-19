const express = require('express');

const router = express.Router();

require('./register')(router);
require('./signin')(router);
require('./auth-user')(router);

module.exports = router;
