const express = require('express');
const MonsterDropList = require('../../models/MonsterDropList');
const DropList = require('../../models/DropList');
const Drop = require('../../models/Drop');

const authorization = require('../../middleware/authorization');

const monsterDropListRouter = express.Router();

monsterDropListRouter.get('/monster_drop_lists', async (req, res) => {
  let monsterDropLists;
  try {
    MonsterDropList.hasOne(DropList);
    DropList.belongsTo(DropList);
    DropList.hasMany(Drop);
    Drop.belongsTo(DropList);
    monsterDropLists = await MonsterDropList.findAll({
      include: [{
        model: DropList
      },
      { model: Drop }]
    })
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(monsterDropLists);
});