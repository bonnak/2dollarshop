require('dotenv').config({ 
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
});

const path = require('path');

module.exports = {
  appUrl: process.env.APP_URL || 'localhost:3000',
  rootPath: path.join(__dirname, '../../'),
  storagePath: path.join(__dirname, '../../static'),
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || 'jwt-secret-xxx',
      salt: process.env.JWT_SALT || 10,
    },
  },
  db: require('./database')[process.env.NODE_ENV || 'development'],
  filesystem: require('./filesystem'),
  transportation: require('./transportation'),
};
