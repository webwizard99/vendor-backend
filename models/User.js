const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  nickname: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.TEXT
  },
  facebookId: {
    type: Sequelize.BIGINT
  }
});

module.exports = User;