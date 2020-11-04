const Sequelize = require('sequelize');
const db = require('../config/database');

const Monster = db.define('monster', {
  name: {
    type: Sequelize.STRING,
    allowedNull: false
  },
  boss: {
    type: Sequelize.BOOLEAN,
    allowedNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  hp: {
    type: Sequelize.INTEGER,
    allowedNull: false
  }, 
  damage: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  defense: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  stealth: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  initiative: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  special: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  heal: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  dropListId: {
    type: Sequelize.INTEGER,
    allowedNull: false
  },
  monsterBehaviorId: {
    type: Sequelize.INTEGER,
    allowedNull: false
  }
});

module.exports = Monster;