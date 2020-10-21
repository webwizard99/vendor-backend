const Sequelize = require('sequelize');
const db = require('../config/database');

const MonsterDropList = db.define('monster_drop_list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dropListId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = MonsterDropList;