const Sequelize = require('sequelize');
const db = require('../config/database');

const Adventurer = db.define('adventurer', {
  name: {
    type: Sequelize.STRING,
    allowedNull: false
  },
  strength: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  speed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cunning: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  intelligence: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  constitution: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dungeonBehaviorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  townBehaviorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  adventurerClassId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Adventurer;