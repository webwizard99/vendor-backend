const Sequelize = require('sequelize');
const db = require('../config/database');

const DungeonTile = db.define('dungeon_tile', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  boss: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  stairs_up: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  treasure: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  encounter: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  trap: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = DungeonTile;