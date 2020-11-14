const express = require('express');

const router = express.Router();

require('./register')(router);
require('./signin')(router);
//require('./signout')(router);

module.exports = router;
