const express = require('express');
const Item = require('../models/Item');
const Potion = require('../models/Potion');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const itemRouter = express.Router();

itemRouter.get('/potions', (req, res) => {
  console.log('potions GET route reached...')
  Potion.findAll()
    .then(potion => {
      console.log(potion)
      res.status(200).send(potion)});
});

module.exports = itemRouter;