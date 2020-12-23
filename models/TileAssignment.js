const Sequelize = require('sequelize');
const db = require('../config/database');

const TileAssignment = db.define('tile_assignment', {
  levelId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tileId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  probability: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = TileAssignment;