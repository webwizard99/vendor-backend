const express = require('express');
// model imports
const MonsterDropList = require('../../models/MonsterDropList');
const DropList = require('../../models/DropList');
const Drop = require('../../models/Drop');
// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const dropListTypes = require('../../config/dropListTypes');

const monsterDropListRouter = express.Router();

monsterDropListRouter.get('/monster_drop_lists', async (req, res) => {
  let monsterDropLists;
  try {
    MonsterDropList.hasOne(DropList);
    DropList.belongsTo(DropList);
    DropList.hasMany(Drop);
    Drop.belongsTo(DropList);
    monsterDropLists = await DropList.findAll({
      include: [{
        model: MonsterDropList
      },
      { model: Drop }]
    }, { where: {
      type: dropListTypes.monster
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(monsterDropLists);
});

module.exports = monsterDropListRouter;