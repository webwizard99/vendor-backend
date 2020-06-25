const Sequelize = require('sequelize');
const db = require('../config/database');

const Potion = db.define('potion', {
  itemId: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.TEXT
  },
  level: {
    type: Sequelize.INTEGER
  }
});

module.exports = Potion;