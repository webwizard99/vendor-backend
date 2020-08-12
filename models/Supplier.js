const Sequelize = require('sequelize');
const db = require('../config/database');

const Supplier = db.define('supplier', {
  name: {
    type: Sequelize.TEXT
  }
});

module.exports = Supplier;