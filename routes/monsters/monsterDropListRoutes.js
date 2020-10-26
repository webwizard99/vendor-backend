const express = require('express');
// model imports
const MonsterDropList = require('../../models/MonsterDropList');
const DropList = require('../../models/DropList');
const Drop = require('../../models/Drop');
// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const dropListTypes = require('../../config/dropListTypes');
const validation = require('../../utilities/validation');
const itemTypes = require('../../config/itemTypes');

const monsterDropListRouter = express.Router();

monsterDropListRouter.get('/monster_drop_lists', async (req, res) => {
  let monsterDropLists;
  try {
    DropList.hasOne(MonsterDropList);
    MonsterDropList.belongsTo(DropList);
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

monsterDropListRouter.post('/monster_drop_list', authorization, async (req, res) => {
  let {
    name,
    gold_min,
    gold_max,
    gold_chance,
    newIndexes
  } = req.body;

  // validate inputs
  if (name && typeof name!== 'string') {
    name = name.toString();
  }
  if (!name || gold_min === undefined || gold_max === undefined || gold_chance === undefined) {
    console.log('monster_drop_list POST request missing field');
    res.status(400).send(false);
    return;
  }
  gold_min = validation.validateInteger(gold_min);
  gold_max = validation.validateInteger(gold_max);
  gold_chance = validation.validateInteger(gold_chance);

  if (typeof newIndexes === 'string' && newIndexes.length > 0) {
    if (!newIndexes.includes(',')) {
      newIndexes = [Number.parseInt(newIndexes)];
    } else {
      newIndexes = newIndexes.split(',');
    }
  }
  
  // associate models
  DropList.hasOne(MonsterDropList);
  MonsterDropList.belongsTo(DropList);
  DropList.hasMany(Drop);
  Drop.belongsTo(DropList);
  
  let newDropList;
  try {
    newDropList = await DropList.create({
      gold_min: gold_min,
      gold_max: gold_max,
      gold_chance: gold_chance,
      type: 'monster'
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // console.log(newDropList);
  const newDropListId = newDropList.id;
  try {
    MonsterDropList.create({
      dropListId: newDropListId,
      name: name
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // If no drops sent with dropList POST request, finish request
  if (newIndexes.length < 0) {
    res.status(200).send(true);
    return;
  }

  // attempt to add all new drops sent with POST request
  for (let index of newIndexes) {
    console.log('in Drop creation logic in monsterDropList POST route...');
    let itemInfo = req.body[`new-drop-${index}-item-id`];
    console.log(itemInfo);
    if (itemInfo !== undefined && itemInfo !== null) {
      itemInfo = JSON.parse(itemInfo);
    }
    console.log(itemInfo);
    let newId = itemInfo.id;
    let newType = itemInfo.type;
    let dropChance = req.body[`new-drop-${index}-drop-chance`];

    // validate inputs
    if (newType && typeof newType !== 'string') {
      newType = newType.toString();
    }
    if (dropChance === undefined || newId === undefined || !newType || itemTypes[newType] === undefined) {
      console.log('attempted to create drop with missing or bad field');
      res.status(400).send();
    }
    newId = validation.validateInteger(newId);
    dropChance = validation.validateInteger(dropChance);
    try {
      Drop.create({
        itemId: newId,
        dropChance: dropChance,
        drop_type: newType,
        dropListId: newDropListId
      });
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  }

  res.status(200).send(true);
      
});

monsterDropListRouter.put('/monster_drop_list', authorization, async (req, res) => {
  let {
    name,
    id,
    monsterDroplistId,
    gold_min,
    gold_max,
    gold_chance,
    existingIds,
    deletedIds,
    newIndexes
  } = req.body;

  // validate inputs
  if (name && typeof name!== 'string') {
    name = name.toString();
  }
  if (!name || gold_min === undefined || gold_max === undefined || gold_chance === undefined || id === undefined || monsterDroplistId === undefined) {
    console.log('monster_drop_list POST request missing field');
    res.status(400).send(false);
    return;
  }
  gold_min = validation.validateInteger(gold_min);
  gold_max = validation.validateInteger(gold_max);
  gold_chance = validation.validateInteger(gold_chance);
  id = validation.validateInteger(id);
  monsterDroplistId = validation.validateInteger(monsterDroplistId);

  if (typeof existingIds === 'string' && existingIds.length > 0) {
    if (!existingIds.includes(',')) {
      existingIds = [Number.parseInt(existingIds)];
    } else {
      existingIds = existingIds.split(',');
    }
  }

  if (typeof deletedIds === 'string' && deletedIds.length > 0) {
    if (!deletedIds.includes(',')) {
      deletedIds = [Number.parseInt(deletedIds)];
    } else {
      deletedIds = deletedIds.split(',');
    }
  }

  if (typeof newIndexes === 'string' && newIndexes.length > 0) {
    if (!newIndexes.includes(',')) {
      newIndexes = [Number.parseInt(newIndexes)];
    } else {
      newIndexes = newIndexes.split(',');
    }
  }

  // associate models
  DropList.hasOne(MonsterDropList);
  MonsterDropList.belongsTo(DropList);
  DropList.hasMany(Drop);
  Drop.belongsTo(DropList);

  // update droplist
  try {
    DropList.update({
      gold_min: gold_min,
      gold_max: gold_max,
      gold_chance: gold_chance,
      type: 'monster'
    }, { where: {
      id: id
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // update monsterDropList
  try {
    MonsterDropList.update({
      dropListId: id,
      name: name
    }, { where: {
      id: monsterDroplistId
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // handle existing drops to be deleted
  if (deletedIds.length > 0) {
    for (let delId of deletedIds) {
      // remove any ids to be deleted from existing list
      if (existingIds.includes(delId)) {
        let delIndex = existingIds.indexOf(delId);
        existingIds.splice(delIndex);
      }

      // delete drop from database
      try {
        Drop.destroy({ where: { id: delId }});
      } catch (err) {
        console.log(err);
      }
    }
  }

  // handle existing drops
  if (existingIds.length > 0) {
    for (let existId of existingIds) {
      let itemInfo = req.body[`drop-${existId}-item-id`];
      if (itemInfo !== undefined && itemInfo !== null) {
        itemInfo = JSON.parse(itemInfo);
      }
      let itemId = itemInfo.id;
      let itemType = itemInfo.type;
      let dropChance = req.body[`drop-${existId}-drop-chance`];
      if (itemType && typeof itemType !== 'string') {
        itemType = itemType.toString();
      }
      if (dropChance === undefined || itemId === undefined || !itemType || itemTypes[itemType] === undefined) {
        console.log('attempted to update drop with missing or bad field');
        res.status(400).send();
      }
      itemId = validation.validateInteger(itemId);
      dropChance = validation.validateInteger(dropChance);
      try {
        Drop.update({
          itemId: itemId,
          dropChance: dropChance,
          drop_type: itemType,
          dropListId: id
        }, { where: {
          id: existId
        }});
      } catch (err) {
        console.log(err);
      }
    }
  }

  // if no new drops sent with supplier PUT request, finish request
  if (newIndexes.length <= 0) {
    res.status(200).send(true);
    return;
  }

  // attempt to add all new drops sent with put request
  for (let index of newIndexes) {
    let itemInfo = req.body[`new-drop-${index}-item-id`];
    if (itemInfo !== undefined && itemInfo !== null) {
      itemInfo = JSON.parse(itemInfo);
    }
    let newId = itemInfo.id;
    let newType = itemInfo.type;
    let dropChance = req.body[`new-drop-${index}-drop-chance`];

    // validate inputs
    if (newType && typeof newType !== 'string') {
      newType = newType.toString();
    }
    if (dropChance === undefined || newId === undefined || !newType || itemTypes[newType] === undefined) {
      console.log('attempted to create drop with missing or bad field');
      res.status(400).send();
    }
    newId = validation.validateInteger(newId);
    dropChance = validation.validateInteger(dropChance);
    try {
      Drop.create({
        itemId: newId,
        dropChance: dropChance,
        drop_type: newType,
        dropListId: id
      });
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  }

  res.status(200).send(true);

});

monsterDropListRouter.delete('/monster_drop_list', authorization, async (req, res) => {
  let {
    id, monsterDroplistId, dropIds: deletedIds
  } = req.body;

  // exist if no valid ID sent
  if (id === undefined || id === null) {
    console.log('attempted to delete monster drop list without ID')
    res.status(400).send(false);
    return;
  }

  //validate data
  id = validation.validateInteger(id);
  monsterDroplistId = validation.validateInteger(monsterDroplistId);

  // validate and convert dropIds
  if (typeof deletedIds === 'string' && deletedIds !== '') {
    if (!deletedIds.includes(',')) {
      deletedIds = [Number.parseInt(deletedIds)];
    } else {
      deletedIds = deletedIds.split(',');
    }
  }

  // associate models
  DropList.hasOne(MonsterDropList);
  MonsterDropList.belongsTo(DropList);
  DropList.hasMany(Drop);
  Drop.belongsTo(DropList);

  try {
    DropList.destroy({ where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  try {
    MonsterDropList.destroy({ where: { id: monsterDroplistId } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // handle existing drops to be deleted
  if (deletedIds.length > 0) {
    for (let delId of deletedIds) {
      try {
        Drop.destroy({ where: { id: delId } });
      } catch (err) {
        console.log(err);
      }
    }
  }

  res.status(200).send(true);
})

module.exports = monsterDropListRouter;