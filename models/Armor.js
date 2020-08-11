const Sequelize = require('sequelize');
const db = require('../config/database');

const Armor = db.define('armor', {
  itemId: {
    type: Sequelize.INTEGER
  },
  level: {
    type: Sequelize.INTEGER
  },
  armor: {
    type: Sequelize.INTEGER
  }
});

module.exports = Armor;