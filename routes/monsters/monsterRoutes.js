const express = require('express');
const Monster = require('../../models/Monsters');
const MonsterDropList = require('../../models/MonsterDropList');
const Drop = require('../../models/Drop');
const DropList = require('../../models/DropList');
const MonsterBehavior = require('../../models/MonsterBehaviors');

// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');

const monsterRouter = express.Router();

monsterRouter.param(':monsterId', (req, res, next, id) => {
  req.id = id;
  next();
});

monsterRouter.get('/monsters', async (req, res) => {
  try {
    let allMonsters = await Monster.findAll();
    res.status(200).send(allMonsters);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

monsterRouter.get('/monsters-full', async (req, res) => {
  try {
    Monster.belongsTo(DropList);
    DropList.hasMany(Monster);
    Monster.belongsTo(MonsterBehavior);
    MonsterBehavior.hasMany(Monster);
    DropList.hasOne(MonsterDropList);
    MonsterDropList.belongsTo(DropList);
    DropList.hasMany(Drop);
    Drop.belongsTo(DropList);
    let monsters = await Monster.findAll({
      include: [
        { model: MonsterBehavior },
        { model: DropList,
          required: true,
          include: [
            {
              model: MonsterDropList,
              required: true
            },
            {
              model: Drop,
              required: true
            }
          ]
        }
      ]
    });
    res.status(200).send(monsters);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
})

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
  boss = validation.validateBoolean(boss);
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
  if (boss === 'true' || boss === true) {
    boss = true;
  } else {
    boss = false;
  }
  id = validation.validateInteger(id);
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
});

monsterRouter.delete('/monster/:monsterId', authorization, async (req, res) => {
  let id = req.id;
  if (id === null || id === undefined) {
    console.log('attempted to DELETE monster without valid id');
    res.status(400).send(false);
    return;
  }
  id = validation.validateInteger(id);

  try {
    Monster.destroy({ where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
})

module.exports = monsterRouter;