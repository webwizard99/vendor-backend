const Sequelize = require('sequelize');
const db = require('../config/database');

const TreasureDropList = db.define('treasure_drop_list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dropListId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = TreasureDropList;