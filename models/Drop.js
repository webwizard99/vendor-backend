const Sequelize = require('sequelize');
const db = require('../config/database');

const Drop = db.define('drop', {
  itemId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dropChance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dropListId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  drop_type: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Drop;