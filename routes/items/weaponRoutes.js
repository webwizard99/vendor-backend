const express = require('express');
const Item = require('../../models/Item');
const Weapon = require('../../models/Weapon');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');

const weaponRouter = express.Router();

weaponRouter.get('/weapons', async (req, res) => {
  console.log('weapons GET route reached...');

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
  
})


module.exports = weaponRouter;