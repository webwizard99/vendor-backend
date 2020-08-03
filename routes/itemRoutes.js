const express = require('express');
const Item = require('../models/Item');
const Potion = require('../models/Potion');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const itemTypes = require('../config/itemTypes');
const potionTypes = require('../config/potionTypes');
const authorization = require('../middleware/authorization');

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

itemRouter.param('itemId', (req, res, next, id) => {
  console.log('param middleware for id reached');
  console.log(id);
  req.id = id;
  next();
})

itemRouter.post('/potions', authorization, async (req, res) => {
  console.log('potions POST route reached');
  console.log(req.body);
  let {
    name,
    value,
    details,
    type,
    level,
    _METHOD
  } = req.body;

  // if (key != process.env.EDITOR_API_KEY) {
  //   console.log('missing key');
  //   res.status(404).send();
  // }

  // validate input types

  if (_METHOD === '_put') {
    console.log('put method sent to potions POST route');
    res.status(400).redirect('/editor');
    return;
  }
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

  let newItem;
  try {
      newItem = await Item.create({
      name,
      type: itemTypes.potion,
      value,
      details
    });
  } catch(err) {
    console.log(err);
  }

  const newItemId = newItem.id;
  let newPotion;
  try {
    newPotion = await Potion.create({
      itemId: newItemId,
      type,
      level
    });
  } catch(err) {
    console.log(err);
  }

  res.status(200).redirect('/editor'); 

});

itemRouter.delete('/potion/:itemId', async (req, res) => {
  let id = req.id;
  console.log(`id: ${id}`);

  if (id && typeof id != 'number') {
    id = Number.parseInt(id);
  }

  if (!id) {
    res.status(400).send();
  } else {
    let delPotion;
    try {
      // Potion.belongsTo(Item);
      delPotion = await Potion.findAll({
        where: {
          id: id
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }

    Promise.allSettled(delPotion)
      .then(async (result) => {
        
        // console.log(delPotion);
        // console.log(typeof delPotion);
        console.log(delPotion[0]);
        console.log(`deleting... potion id: ${id}, itemId: ${delPotion[0].itemId}`);
        const itemId = delPotion.itemId;
        
        console.log(`itemId: ${itemId}`)
        try {
          Potion.destroy({ where: { id: id }});
        } catch (err) {
          console.log(err);
          res.status(400).send();
        }
    
        try {
          Item.destroy({ where: { id: itemId }}) 
        } catch (err) {
          console.log(err);
          res.status(400).send();
        }
        
        res.status(200).redirect('/editor');
      })
    
  }
})

module.exports = itemRouter;