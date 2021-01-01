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
      console.log('attempted to create tileAssignment with missing field');
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
});

levelRouter.put('/level', authorization, async (req, res) => {
  let {
    id,
    number,
    dropListId,
    boss,
    boss_id,
    monsters_min_level,
    monsters_max_level,
    newAssignmentKeys,
    presentIds,
    deletedIds
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  if (id === undefined || id === null) {
    console.log('Attempted PUT request for monster with invalid id');
    res.status(400).send(false);
    return;
  }
  id = validation.validateInteger(id);
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
  presentIds = stringArrayHandler.getArrayFromString(presentIds);
  deletedIds = stringArrayHandler.getArrayFromString(deletedIds);

  try {
    Level.update({
      number,
      dropListId,
      boss,
      boss_id,
      monsters_min_level,
      monsters_max_level
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  
  // handle existing tileAssignments to be deleted
  if (deletedIds.length > 0) {
    for (let delId of deletedIds) {
      // remove any ids to be deleted from existing list
      if (presentIds.includes(delId)) {
        let delIndex = presentIds.indexOf(delId);
        presentIds.splice(delIndex);
      }

      // delete tileAssignment from database
      try {
        TileAssignment.destroy({ where: { id: delId } });
      } catch (err) {
        console.log(err);
      }
    }
  }

  // handle existing tileAssignments
  if (presentIds.length > 0) {
    for (let presentId of presentIds) {
      let tileId = req.body[`assignment-${assignment.id}-tileId`];
      let probability = req.body[`assignment-${assignment.id}-probability`];

      // validate inputs
      tileId = validation.validateInteger(tileId);
      probability = validation.validateInteger(probability);

      if (!tileId || !probability) {
        console.log('attempted to update tileAssignment with missing field');
        res.status(400).send();
      }

      // update model
      try {
        TileAssignment.update({
          tileId,
          probability
        }, { where: { 
          id: presentId 
        }});
      } catch (err) {
        console.log(err);
      }
    }
  }

  // If no new tileAssignements sent with level PUT request,
  // finish request
  if (newAssignmentKeys.length <= 0) {
    res.status(200).send(true);
    return;
  }

  // Add new tileAssignments to database
  for (let index of newAssignmentKeys) {
    let tileId = req.body[`new-assignment-${index}-tileId`];
    let probability = req.body[`new-assignment-${index}-probability`];

    // validate inputs
    tileId = validation.validateInteger(tileId);
    probability = validation.validateInteger(probability);

    if (!tileId || !probability) {
      console.log('attempted to create tileAssignment with missing field');
      res.status(400).send();
    }
  
    try {
      TileAssignment.create({
        levelId: id,
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