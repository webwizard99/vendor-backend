const Sequelize = require('sequelize');
const db = require('../config/database');

const Offering = db.define('offering', {
  supplierId: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.TEXT
  },
  markup: {
    type: Sequelize.INTEGER
  }
});

module.exports = Offering;