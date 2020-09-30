const Sequelize = require('sequelize');
const db = require('../config/database');

const AdventurerClass = db.define('adventurer_class', {
  name: {
    type: Sequelize.STRING,
    allowedNull: false
  },
  bargaining: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  perception: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  artifacts: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  traps: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  agility: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tactics: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  martial_weapons: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  armor: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  anatomy: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})