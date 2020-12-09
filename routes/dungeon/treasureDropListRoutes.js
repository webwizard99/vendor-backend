const express = require('express');
// model imports
const TreasureDropList = require('../../models/TreasureDropList');
const DropList = require('../../models/DropList');
const Drop = require('../../models/Drop');
// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const dropListTypes = require('../../config/dropListTypes');
const validation = require('../../utilities/validation');
const itemTypes = require('../../config/itemTypes');

const treasureDropListRouter = express.Router();

treasureDropListRouter.get('/treasure_drop_lists', async (req, res) => {
  let treasureDropLists;
  try {
    DropList.hasOne(TreasureDropList);
    TreasureDropList.belongsTo(DropList);
    DropList.hasMany(Drop);
    Drop.belongsTo(DropList);
    treasureDropLists = await DropList.findAll({
      include: [ {
        model: TreasureDropList
      },
      { model: Drop}]
    }, { where: {
      type: dropListTypes.treasure
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(treasureDropLists);
})

module.exports = treasureDropListRouter;