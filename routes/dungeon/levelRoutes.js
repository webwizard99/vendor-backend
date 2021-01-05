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
  newAssignmentKeys = stringArrayHandler.getIntArrayFromStringArray(newAssignmentKeys);

  // create object for model creation based on presence
  // of boss data
  let modelPayload = {}
  if (boss) {
    modelPayload = {
      number,
      dropListId,
      boss,
      boss_id,
      monsters_min_level,
      monsters_max_level
    }
  } else {
    modelPayload = {
      number,
      dropListId,
      boss,
      monsters_min_level,
      monsters_max_level
    }
  }

  let newLevel;
  try {
    newLevel = await Level.create(modelPayload);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  if (newAssignmentKeys.length <= 0) {
    res.status(200).send(true);
    return;
  }

  console.log(newAssignmentKeys);

  for (let index of newAssignmentKeys) {
    let assignmentTileId = req.body[`new-assignment-${index}-tileId`];
    let assignmentProbability = req.body[`new-assignment-${index}-probability`];

    // validate inputs
    assignmentTileId = validation.validateInteger(assignmentTileId);
    assignmentProbability = validation.validateInteger(assignmentProbability);

    if (assignmentTileId === false || !assignmentProbability) {
      console.log('attempted to create tileAssignment with missing field');
      res.status(400).send();
    }
  
    try {
      TileAssignment.create({
        levelId: newLevel.id,
        tileId: assignmentTileId,
        probability: assignmentProbability
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
  // convert array entries to integers
  newAssignmentKeys = stringArrayHandler.getIntArrayFromStringArray(newAssignmentKeys);
  presentIds = stringArrayHandler.getIntArrayFromStringArray(presentIds);
  deletedIds = stringArrayHandler.getIntArrayFromStringArray(deletedIds);

// create object for model creation based on presence
  // of boss data
  let modelPayload = {}
  if (boss) {
    modelPayload = {
      number,
      dropListId,
      boss,
      boss_id,
      monsters_min_level,
      monsters_max_level
    }
  } else {
    modelPayload = {
      number,
      dropListId,
      boss,
      monsters_min_level,
      monsters_max_level
    }
  }

  try {
    Level.update(modelPayload, { where: { id: id } });
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
      let assignmentTileId = req.body[`assignment-${presentId}-tileId`];
      let assignmentProbability = req.body[`assignment-${presentId}-probability`];

      // validate inputs
      assignmentTileId = validation.validateInteger(assignmentTileId);
      assignmentProbability = validation.validateInteger(assignmentProbability);

      if (assignmentTileId === false || !assignmentProbability) {
        console.log('attempted to update tileAssignment with missing field');
        res.status(400).send();
      }

      // update model
      try {
        TileAssignment.update({
          tileId: assignmentTileId,
          probability:assignmentProbability
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
    console.log(newAssignmentKeys)
    let assignmentTileId = req.body[`new-assignment-${index}-tileId`];
    let assignmentProbability = req.body[`new-assignment-${index}-probability`];
    console.log(assignmentTileId);
    console.log(assignmentProbability);
    console.log(id);
    // validate inputs
    assignmentTileId = validation.validateInteger(assignmentTileId);
    assignmentProbability = validation.validateInteger(assignmentProbability);

    if (assignmentTileId === false || !assignmentProbability) {
      console.log('attempted to create tileAssignment with missing field');
      res.status(400).send();
    }
  
    try {
      TileAssignment.create({
        levelId: id,
        tileId: assignmentTileId,
        probability: assignmentProbability
      });
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  }

  res.status(200).send(true);
})

module.exports = levelRouter;