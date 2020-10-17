const Sequelize = require('sequelize');
const db = require('../config/database');

const TownBehavior = db.define('town_behavior', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  buy_potion: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sell_potion: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  upgrade_potion: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  buy_weapon: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sell_weapon: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  upgrade_weapon: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  buy_armor: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sell_armor: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  upgrade_armor: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  wealth: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  enter_dungeon: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  use_tavern: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  retire: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  emigrate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  garrison_wall: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { underscored: true });

module.exports = TownBehavior;