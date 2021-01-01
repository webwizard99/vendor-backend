const express = require('express');
const Level = require('../../models/Level');
const TileAssignment = require('../../models/TileAssignment');
const DropList = require('../../models/DropList');

// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');
const stringArrayHandler = require('../../utilities/stringArrayHandler');

const levelRouter = express.Router();

levelRouter.get('/levels', async (req, res) => {
  try {
    Level.hasMany(TileAssignment);
    TileAssignment.belongsTo(Level);
    let allLevels = await Level.findAll({
      include: {
        model: TileAssignment
      }
    });
    res.status(200).send(allLevels);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

levelRouter.post('/level', authorization, async (req, res) => {
  let {
    number,
    dropListId,
    boss,
    boss_id,
    monsters_min_level,
    monsters_max_level,
    newAssignmentKeys
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  boss = validation.validateBoolean(boss);
  number = validation.validateInteger(number);
  dropListId = validation.validateInteger(dropListId);
  boss_id = validation.validateInteger(boss_id);
  monsters_min_level = validation.validateInteger(monsters_min_level);
  monsters_max_level = validation.validateInteger(monsters_max_level);

  if (number === undefined || dropListId === undefined || boss === undefined || 
    monsters_min_level === undefined || monsters_max_level === undefined) {
    console.log('level POST request missing field');
    res.status(400).send(false);
    return;
  }

  // convert arrays from form back to arrays
  newAssignmentKeys = stringArrayHandler.getArrayFromString(newAssignmentKeys);

  let newLevel;
  try {
    newLevel = await Level.create({
      number,
      dropListId,
      boss,
      boss_id,
      monsters_min_level,
      monsters_max_level,
      newAssignmentKeys
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  if (newAssignmentKeys.length <= 0) {
    res.status(200).send(true);
    return;
  }

  for (let index of newAssignmentKeys) {
    let tileId = req.body[`new-assignment-${index}-tileId`];
    let probability = req.body[`new-assignment-${index}-probability`];

    // validate inputs
    tileId = validation.validateInteger(tileId);
    probability = validation.validateInteger(probability);

    if (!tileId || !probability) {
      console.log('attempted to create tileAssignement with missing field');
      res.status(400).send();
    }
  
    try {
      TileAssignment.create({
        levelId: newLevel.id,
        tileId,
        probability
      });
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  }

  res.status(200).send(true);
})

module.exports = levelRouter;