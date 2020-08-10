const Sequelize = require('sequelize');
const db = require('../config/database');

const Item = db.define('item', {
  name: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.TEXT
  },
  value: {
    type: Sequelize.INTEGER
  },
  details: {
    type: Sequelize.TEXT
  },
  rarity: {
    type: Sequelize.INTEGER
  }
});

module.exports = Item;