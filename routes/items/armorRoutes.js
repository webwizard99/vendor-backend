const express = require('express');
const Item = require('../../models/Item');
const Armor = require('../../models/Armor');
const { Op } = require('sequelize');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');
const validation = require('../../utilities/validation');
const armorRouter = express.Router();

armorRouter.param('itemId', (req, res, next, id) => {
  req.id = id;
  next();
});

armorRouter.get('/armor', async (req, res) => {
  let allArmor;
  try {
    Armor.belongsTo(Item);
    allArmor = await Armor.findAll({
      include: {
        model: Item
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }

  res.status(200).send(allArmor);
});

armorRouter.get('/armor-id', async (req, res) => {
  Armor.belongsTo(Item);
  let id = req.query['id'];
  id = validation.validateInteger(id);
  let armor;
  try {
    armor = await Armor.findAll({
      include: {
        model: Item
      },
      where: { itemId: id }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  res.status(200).send(armor);
})

// GET route for armor in level range
armorRouter.get('/armor-in-level-range', async (req, res) => {
  Armor.belongsTo(Item);
  let minLevel = req.query['min-level'];
  let maxLevel = req.query['max-level'];
  minLevel = validation.validateInteger(minLevel);
  maxLevel = validation.validateInteger(maxLevel);
  let armor;
  try {
    armor = await Armor.findAll({
      include: {
        model: Item
      },
      where: {
        level: {
          [Op.gte]: minLevel,
          [Op.lte]: maxLevel
        }
      }
    });
  } catch (err) {
    console.log(err);
    req.status(400).send(false);
    return;
  }

  res.status(200).send(armor);
});

// handle armor POST request
armorRouter.post('/armor', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    rarity,
    level,
    armor
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
  if (rarity && typeof rarity !== 'number') {
    rarity = Number.parseInt(rarity);
  }
  if (level && typeof level !== 'number') {
    level = Number.parseInt(level);
  }
  if (armor && typeof armor !== 'number') {
    armor = Number.parseInt(armor);
  }

  // reject request if missing a field
  if (!name || !value || !rarity || !level || !armor) {
    console.log('armor post request missing field');
    res.status(400).send();
    return false;
  }

  // attempt to create a new item
  let newItem;
  try {
    newItem = await Item.create({
      name,
      type: itemTypes.armor,
      value,
      details,
      rarity
    });
  } catch (err) {
    console.log(err);
  }

  // capture item id for foreign key to create Armor
  const newItemId = newItem.id;
  let newArmor;
  try {
    newArmor = await Armor.create({
      itemId: newItemId,
      level,
      armor
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).send(true);
});


// handle armor PUT request
armorRouter.put('/armor', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    rarity,
    level,
    armor,
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
  if (rarity && typeof rarity !== 'number') {
    rarity = Number.parseInt(rarity);
  }
  if (level && typeof level !== 'number') {
    level = Number.parseInt(level);
  }
  if (armor && typeof armor !== 'number') {
    armor = Number.parseInt(armor);
  }

  // reject request if missing a field
  if (!name || !value || !rarity || !level || !armor) {
    console.log('armor put request missing field');
    res.status(400).send(false);
    return false;
  }

  // validate inputs
  if (id !== null && typeof id !== 'number') {
    id = Number.parseInt(id);
  }
  if (itemId !== null && typeof itemId !== 'number') {
    itemId = Number.parseInt(itemId);
  }
  if (id === null || itemId === null) {
    console.log('Attempted PUT request without valid ID');
    res.status(400).send(false);
    return;
  }

  // update Item record
  let updatedItem;
  try {
    updatedItem = await Item.update({
      name,
      type: itemTypes.armor,
      value,
      details,
      rarity
    }, { where: {
      id: itemId
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // update Armor record
  let updatedArmor;
  try {
    updatedArmor = await Armor.update({
      level,
      armor
    }, { where: {
      id: id
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  res.status(200).send(true);
  return;
})

// handle armor DELETE request
armorRouter.delete('/armor/:itemId', authorization, async (req, res) => {
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

  // get Armor with ID sent to route
  let delArmor;
  try {
    delArmor = await Armor.findAll({
      where: {
        id: id
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send();
    return;
  }

  // Await retrieval of armor so Item foreign key may
  // be retreived to allow Item to be deleted along with
  // Armor.
  Promise.allSettled(delArmor)
    .then(async (result) => {
      const itemId = delArmor[0].dataValues.itemId;

      try {
        Armor.destroy({ where: { id: id } });
      } catch (err) {
        console.log(err);
        res.status(400).send;
        return;
      }

      try {
        Item.destroy({ where: { id: itemId } });
      } catch (err) {
        console.log(err);
        res.status(400).send;
        return;
      }

      res.status(200).send(true);
    });
});

module.exports = armorRouter;