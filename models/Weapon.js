const Sequelize = require('sequelize');
const db = require('../config/database');

const Weapon = db.define('weapon', {
  itemId: {
    type: Sequelize.INTEGER
  },
  level: {
    type: Sequelize.INTEGER
  },
  damage: {
    type: Sequelize.INTEGER
  }
});

module.exports = Weapon;