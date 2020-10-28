const Sequelize = require('sequelize');
const db = require('../config/database');

const MonsterBehavior = db.define('monster_behavior', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  confront_weakened_adventurer: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  special_move: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  defend: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  heal: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  block_flee: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  migrate: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = MonsterBehavior;