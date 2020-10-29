const express = require('express');
const MonsterBehavior = require('../../models/MonsterBehaviors');
// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');
const monsterBehaviorRouter = express.Router();

monsterBehaviorRouter.get('/monster_behaviors', async (req, res) => {
  try {
    let allMonsterBehaviors = await MonsterBehavior.findAll();
    res.status(200).send(allMonsterBehaviors);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

module.exports = monsterBehaviorRouter;

