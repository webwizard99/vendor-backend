const express = require('express');
const Item = require('../../models/Item');
const Weapon = require('../../models/Weapon');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');

const weaponRouter = express.Router();

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
  }
  
  res.status(200).send(allWeapons);
  
});

// POST and PUT route (due to composition of request through
// HTML form only allowing POST request) for weapons
weaponRouter.post('/weapons', authorization, async (req, res) => {
  let {
    name,
    value,
    details,
    rarity,
    level,
    damage,
    id,
    itemId,
    _METHOD
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
    res.status(400).send();
    return false;
  }

  if (_METHOD === '_put') {
    console.log('PUT method sent to potions POST route');

    if (id !== null && typeof id !== 'number') {
      id = Number.parseInt(id);
    }

    if (itemId !== null && typeof itemId !== 'number') {
      itemId = Number.parseInt(itemId);
    }

    if (id === null || itemId === null) {
      console.log('Attempted PUT request without valid ID');
      res.status(400).redirect('/editor');
      return;
    }

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
      res.status(400).send();
      return;
    }

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
      res.status(400).send();
      return;
    }

    res.status(200).redirect('/editor');
    return;
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

  res.status(200).redirect('/editor');
});


module.exports = weaponRouter;