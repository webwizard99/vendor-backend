const express = require('express');
const Item = require('../models/Item');
const Potion = require('../models/Potion');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const itemTypes = require('../config/itemTypes');
const potionTypes = require('../config/potionTypes');

const itemRouter = express.Router();

itemRouter.get('/potions', (req, res) => {
  console.log('potions GET route reached...');
  Potion.belongsTo(Item);
  Potion.findAll({
    include: 
      { model: Item }
  })
    .then(potion => {
      res.status(200).send(potion)})
    .catch(err => console.log(err));
});

itemRouter.post('/potions', async (req, res) => {
  console.log('potions POST route reached');
  let {
    key,
    name,
    value,
    details,
    type,
    level

  } = req.body;

  if (key != process.env.EDITOR_API_KEY) {
    console.log('missing key');
    res.status(404).send();
  }

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  if (value && typeof value !== 'number') {
    value = Number.parseInt(value);
  }
  if (details && typeof details !== 'string') {
    details = details.toString();
  }
  if (type && typeof type !== 'string') {
    type = type.toString();
  }
  if (level && typeof level !== 'number') {
    level = Number.parseInt(level);
  }

  // reject request if missing a field
  if (!name || !value || !type || !level || !potionTypes[type]) {
    console.log('potion post request missing field');
    res.status(400).send();
    return false;
  }

  try {
      const newItem = await Item.create({
      name,
      type: itemTypes.potion,
      value,
      details
    });
  } catch(err) {
    console.log(err);
  }

  const newItemId = newItem.id;
  try {
    const newPotion = await Potion.create({
      itemId: newItemId,
      type,
      level
    });
  } catch(err) {
    console.log(err);
  }

  res.status(200).send(newPotion);
  

})

module.exports = itemRouter;