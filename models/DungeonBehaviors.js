const Sequelize = require('sequelize');
const db = require('../config/database');

const DungeonBehavior = db.define('dungeon_behavior', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  advance_tile: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  conserve_health: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  use_potion: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  return_to_town: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  check_for_traps: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  search_for_treasure: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fight_monster: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  flee_encounter: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  explore_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  advance_next_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fight_boss_monster: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  try_for_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = DungeonBehavior;