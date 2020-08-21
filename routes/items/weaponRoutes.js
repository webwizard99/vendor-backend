const express = require('express');
const Item = require('../../models/Item');
const Weapon = require('../../models/Weapon');
const { Op } = require('sequelize');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');

const weaponRouter = express.Router();

weaponRouter.param('itemId', (req, res, next, id) => {
  req.id = id;
  next();
});

weaponRouter.param('min-level', (req, res, next, level) => {
  req.min_level = level;
  next();
});

weaponRouter.param('max-level', (req, res, next, level) => {
  req.max_level = level;
});

// GET route for all weapons
weaponRouter.get('/weapons', async (req, res) => {
  let allWeapons;
  try {
    Weapon.belongsTo(Item);
    allWeapons = await Weapon.findAll({
      include:
        { model: Item }
    })
  } catch(err) {
    console.log(err);
    res.status(400).send();
  }
  
  res.status(200).send(allWeapons);
});

// GET route for weapons in level range
weaponRouter.get('/weapons-in-level-range/:min-level/:max-level', async (req, res) => {
  Weapon.belongsTo(Item);
  const minLevel = req.min_level;
  const maxLevel = req.max_level;
  let weapons;
  try {
    weapons = await Weapon.findAll({
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
    res.status(400).send(false);
    return;
  }
  return weapons;
})

// handle weapon POST request
weaponRouter.post('/weapon', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    rarity,
    level,
    damage
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
  if (damage && typeof damage !== 'number') {
    damage = Number.parseInt(damage);
  }

  // reject request if missing a field
  if (!name || !value || !rarity || !level || !damage) {
    console.log('weapon post request missing field');
    res.status(400).send(false);
    return false;
  }

  // attempt to create a new item
  let newItem;
  try {
    newItem = await Item.create({
      name,
      type: itemTypes.weapon,
      value,
      details,
      rarity
    });
  } catch (err) {
    console.log(err);
  }

  // capture item id for foreign key to create Weapon
  const newItemId = newItem.id;
  let newWeapon;
  try {
    newWeapon = await Weapon.create({
      itemId: newItemId,
      level,
      damage
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).send(true);
});

// handle weapon PUT request
weaponRouter.put('/weapon', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    rarity,
    level,
    damage,
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
  if (damage && typeof damage !== 'number') {
    damage = Number.parseInt(damage);
  }

  // reject request if missing a field
  if (!name || !value || !rarity || !level || !damage) {
    console.log('weapon put request missing field');
    res.status(400).send(false);
    return false;
  }

  //validate inputs
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
      type: itemTypes.weapon,
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

  // update Weapon record
  let updatedWeapon;
  try {
    updatedWeapon = await Weapon.update({
      level,
      damage
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
});

weaponRouter.delete('/weapon/:itemId', authorization, async (req, res) => {
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

  // get Weapon with ID sent to route
  let delWeapon;
  try {
    delWeapon = await Weapon.findAll({
      where: {
        id: id
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send();
    return;
  }

  // Await retrieval of weapon so Item foreign key may
  // be retreived to allow Item to be deleted along with
  // Weapon.
  Promise.allSettled(delWeapon)
    .then(async (result) => {
      const itemId = delWeapon[0].dataValues.itemId;

      try {
        Weapon.destroy({ where: { id: id } });
      } catch (err) {
        console.log(err);
        res.status(400).send(false);
        return;
      }

      try {
        Item.destroy({ where: { id: itemId } });
      } catch (err) {
        console.log(err);
        res.status(400).send(false);
        return;
      }

      res.status(200).send(true);
    });

  
});


module.exports = weaponRouter;