const express = require('express');
const MonsterBehavior = require('../../models/MonsterBehaviors');
// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');
const monsterBehaviorRouter = express.Router();

monsterBehaviorRouter.param(':behaviorId', (req, res, next, id) => {
  req.id = id;
  next();
});

monsterBehaviorRouter.get('/monster_behaviors', async (req, res) => {
  try {
    let allMonsterBehaviors = await MonsterBehavior.findAll();
    res.status(200).send(allMonsterBehaviors);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

monsterBehaviorRouter.post('/monster_behavior', authorization, async (req, res) => {
  let {
    name,
    confront_weakened_adventurer,
    special_move,
    defend,
    heal,
    block_flee,
    migrate
  } = req.body;

  // validate input types
  name = validation.validateString(name);
  confront_weakened_adventurer = validation.validateInteger(confront_weakened_adventurer);
  special_move = validation.validateInteger(special_move);
  defend = validation.validateInteger(defend);
  heal = validation.validateInteger(heal);
  block_flee = validation.validateInteger(block_flee);
  migrate = validation.validateInteger(migrate);

  if (!name || confront_weakened_adventurer === undefined || special_move === undefined ||
    defend === undefined || heal === undefined || block_flee === undefined || 
    migrate === undefined) {
    console.log('monster behavior POST request missing field');
    res.status(400).send(false);
    return;
  }
  try {
    MonsterBehavior.create({
      name,
      confront_weakened_adventurer,
      special_move,
      defend,
      heal,
      block_flee,
      migrate
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

monsterBehaviorRouter.put('/monster_behavior', authorization, async (req, res) => {
  let {
    id,
    name,
    confront_weakened_adventurer,
    special_move,
    defend,
    heal,
    block_flee,
    migrate
  } = req.body;

  // check id
  if (id === undefined || id === null) {
    console.log('Attempted PUT request for monster behavior without valid id');
    res.status(400).send(false);
    return;
  }
  // validate input types
  name = validation.validateString(name);
  id = validation.validateInteger(id);
  confront_weakened_adventurer = validation.validateInteger(confront_weakened_adventurer);
  special_move = validation.validateInteger(special_move);
  defend = validation.validateInteger(defend);
  heal = validation.validateInteger(heal);
  block_flee = validation.validateInteger(block_flee);
  migrate = validation.validateInteger(migrate);

  if (!name || confront_weakened_adventurer === undefined || special_move === undefined ||
    defend === undefined || heal === undefined || block_flee === undefined || 
    migrate === undefined) {
    console.log('monster behavior POST request missing field');
    res.status(400).send(false);
    return;
  }

  try {
    MonsterBehavior.update({
      name,
      confront_weakened_adventurer,
      special_move,
      defend,
      heal,
      block_flee,
      migrate
    }, { where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  res.status(200).send(true);
});

monsterBehaviorRouter.delete('/monster_behavior/:behaviorId', authorization, async (req, res) => {
  let id = req.id;
  if (id === null || id === undefined) {
    res.status(400).send(false);
    return;
  }
  id = validation.validateInteger(id);

  try {
    MonsterBehavior.destroy({ where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
})

module.exports = monsterBehaviorRouter;

