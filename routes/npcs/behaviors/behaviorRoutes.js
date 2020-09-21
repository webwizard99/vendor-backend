const express = require('express');
const TownBehavior = require('../../../models/TownBehaviors');
const DungeonBehavior = require('../../../models/DungeonBehaviors');

const behaviorRouter = express.Router();

behaviorRouter.get('/town_behaviors', async (req, res) => {
  try {
    let allTownBehaviors = await TownBehavior.findAll();
    res.status(200).send(allTownBehaviors);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

behaviorRouter.get('/dungeon_behaviors', async (req, res) => {
  try {
    let allDungeonBehaviors = await DungeonBehavior.findAll();
    res.status(200).send(allDungeonBehaviors);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
})

module.exports = behaviorRouter;