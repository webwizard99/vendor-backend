const express = require('express');
const Item = require('../../models/Item');
const Armor = require('../../models/Armor');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');

const armorRouter = express.Router();

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

module.exports = armorRouter;