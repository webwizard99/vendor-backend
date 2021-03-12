const Sequelize = require('sequelize');
const db = require('../config/database');

const Monster = db.define('monster', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  boss: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hp: {
    type: Sequelize.INTEGER,
    allowNull: false
  }, 
  damage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  defense: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stealth: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  initiative: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  special: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  heal: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  experience: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dropListId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  monsterBehaviorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Monster;