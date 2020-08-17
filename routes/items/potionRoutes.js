const express = require('express');
const Item = require('../../models/Item');
const Potion = require('../../models/Potion');
// const Sequelize = require('sequelize');

const itemTypes = require('../../config/itemTypes');
const potionTypes = require('../../config/potionTypes');
const authorization = require('../../middleware/authorization');

const potionRouter = express.Router();

potionRouter.param('itemId', (req, res, next, id) => {
  req.id = id;
  next();
});

// GET route for all potions
potionRouter.get('/potions', async (req, res) => {
  Potion.belongsTo(Item);
  let potions;
  try {
    potions = await Potion.findAll({
      include: 
        { model: Item }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send();
    return;
  }
  
  res.status(200).send(potions);
   
});

// handle potion POST request
potionRouter.post('/potion', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    type,
    level,
    rarity
  } = req.body;

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

  if (rarity && typeof rarity !== 'number') {
    rarity = Number.parseInt(rarity);
  }
  // reject request if missing a field
  if (!name || !value || !type || !level || !rarity || !potionTypes[type]) {
    console.log('potion post request missing field');
    res.status(400).send();
    return false;
  }

  // attempt to create a new Item
  let newItem;
  try {
      newItem = await Item.create({
      name,
      type: itemTypes.potion,
      value,
      details,
      rarity
    });
  } catch(err) {
    console.log(err);
    res.status(400).send(false);
    return
  }

  // capture item id for foreign key to create Potion
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
    res.status(400).send(false);
    return;
  }

  res.status(200).redirect('/editor'); 

});

// handle potion PUT request
potionRouter.put('/potion', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    type,
    level,
    rarity,
    id,
    itemId
  } = req.body;

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

  if (rarity && typeof rarity !== 'number') {
    rarity = Number.parseInt(rarity);
  }
  // reject request if missing a field
  if (!name || !value || !type || !level || !rarity || !potionTypes[type]) {
    console.log('potion post request missing field');
    res.status(400).send();
    return false;
  }

  if (id !== null && typeof id !== 'number') {
    id = Number.parseInt(id);
  }

  if (itemId !== null && typeof itemId !== 'number') {
    itemId = Number.parseInt(itemId);
  }

  if (id === null || itemId === null) {
    console.log('Attempted PUT request without valid ID');
    res.status(400).send();
    return;
  }

  let updatedItem;
  try {
    updatedItem = await Item.update({
      name,
      type: itemTypes.potion,
      value,
      details,
      rarity
  }, { where: {
    id: itemId
  }});
  } catch(err) {
    console.log(err);
    res.status(400).send();
    return;
  }

  let updatedPotion;
  try {
    updatedPotion = await Potion.update({
      type,
      level
    }, { where: {
      id: id
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send();
    return;
  }
    
  res.status(200).send(true);
  return;
})

// DELETE route for potions
potionRouter.delete('/potion/:itemId', authorization, async (req, res) => {
  let id = req.id;

  // Validate data
  if (id && typeof id != 'number') {
    id = Number.parseInt(id);
  }

  // Exit if no valid ID sent  
  if (!id) {
    res.status(400).send();
    return;
  }

  // Get potion with ID sent to route
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

  // Await retrieval of potion so Item foreign key may
  // be retreived to allow Item to be deleted along with
  // Potion.
  Promise.allSettled(delPotion)
    .then(async (result) => {
      
      const itemId = delPotion[0].dataValues.itemId;

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

      res.status(200).send(true);
    });

});

module.exports = potionRouter;