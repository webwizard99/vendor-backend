const express = require('express');
const Monster = require('../../models/Monsters');

// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');

const monsterRouter = express.Router();

monsterRouter.get('/monsters', async (req, res) => {
  try {
    let allMonsters = await Monster.findAll();
    res.status(200).send(allMonsters);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

monsterRouter.post('/monster', authorization, async (req, res) => {
  let {
    name,
    boss,
    level,
    hp,
    damage,
    defense,
    stealth,
    initiative,
    special,
    heal,
    dropListId,
    monsterBehaviorId
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  boss = validation.validateInteger(boss);
  level = validation.validateInteger(level);
  hp = validation.validateInteger(hp);
  damage = validation.validateInteger(damage);
  defense = validation.validateInteger(defense);
  stealth = validation.validateInteger(stealth);
  initiative = validation.validateInteger(initiative);
  special = validation.validateInteger(special);
  heal = validation.validateInteger(heal);
  dropListId = validation.validateInteger(dropListId);
  monsterBehaviorId = validation.validateInteger(monsterBehaviorId);

  if (!name || boss === undefined || level === undefined || hp === undefined || 
    damage === undefined || defense === undefined || stealth === undefined || 
    initiative === undefined || special === undefined || heal === undefined || 
    dropListId === undefined || monsterBehaviorId === undefined) {
      console.log('monster POST request missing field');
      res.status(400).send(false);
      return;
  }
  try {
    Monster.create({
      name,
      boss,
      level,
      hp,
      damage,
      defense,
      stealth,
      initiative,
      special,
      heal,
      dropListId,
      monsterBehaviorId
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

monsterRouter.put('/monster', authorization, async (req, res) => {
  let {
    id,
    name,
    boss,
    level,
    hp,
    damage,
    defense,
    stealth,
    initiative,
    special,
    heal,
    dropListId,
    monsterBehaviorId
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
  boss = validation.validateInteger(boss);
  level = validation.validateInteger(level);
  hp = validation.validateInteger(hp);
  damage = validation.validateInteger(damage);
  defense = validation.validateInteger(defense);
  stealth = validation.validateInteger(stealth);
  initiative = validation.validateInteger(initiative);
  special = validation.validateInteger(special);
  heal = validation.validateInteger(heal);
  dropListId = validation.validateInteger(dropListId);
  monsterBehaviorId = validation.validateInteger(monsterBehaviorId);

  if (!name || boss === undefined || level === undefined || hp === undefined || 
    damage === undefined || defense === undefined || stealth === undefined || 
    initiative === undefined || special === undefined || heal === undefined || 
    dropListId === undefined || monsterBehaviorId === undefined) {
      console.log('monster PUT request missing field');
      res.status(400).send(false);
      return;
  }

  try {
    Monster.update({
      name,
      boss,
      level,
      hp,
      damage,
      defense,
      stealth,
      initiative,
      special,
      heal,
      dropListId,
      monsterBehaviorId
    }, { where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
})

module.exports = monsterRouter;