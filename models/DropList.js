const Sequelize = require('sequelize');
const db = require('../config/database');

const DropList = db.define('drop_list', {
  type: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  gold_min: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gold_max: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gold_chance: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = DropList;