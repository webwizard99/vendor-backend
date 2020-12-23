const Sequelize = require('sequelize');
const db = require('../config/database');

const Level = db.define('level', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dropListId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  boss: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  boss_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  monsters_min_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  monsters_max_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Level;