const express = require('express');
const Item = require('../models/Item');
const Potion = require('../models/Potion');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const itemRouter = express.Router();

itemRouter.get('/potions', (req, res) => {
  console.log('potions GET route reached...');
  Potion.belongsTo(Item);
  Potion.findAll({
    include: 
      { model: Item }
  })
    .then(potion => {
      console.log(potion)
      res.status(200).send(potion)})
    .catch(err => console.log(err));
});

module.exports = itemRouter;