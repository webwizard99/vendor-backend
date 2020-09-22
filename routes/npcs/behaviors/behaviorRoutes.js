const express = require('express');
const TownBehavior = require('../../../models/TownBehaviors');
const DungeonBehavior = require('../../../models/DungeonBehaviors');
// middleware imports
const authorization = require('../../../middleware/authorization');
// utility imports
const validation = require('../../../utilities/validation');
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
});

behaviorRouter.post('/town_behavior', authorization, async (req, res) => {
  let {
    name,
    buy_potion,
    sell_potion,
    upgrade_potion,
    buy_weapon,
    sell_weapon,
    upgrade_weapon,
    buy_armor,
    sell_armor,
    upgrade_armor,
    wealth,
    enter_dungeon,
    use_tavern,
    retire,
    emigrate,
    garrison_wall
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  buy_potion = validation.validateInteger(buy_potion);
  sell_potion = validation.validateInteger(sell_potion);
  upgrade_potion = validation.validateInteger(upgrade_potion);
  buy_weapon = validation.validateInteger(buy_weapon);
  sell_weapon = validation.validateInteger(sell_weapon);
  upgrade_weapon = validation.validateInteger(upgrade_weapon);
  buy_armor = validation.validateInteger(buy_armor);
  sell_armor = validation.validateInteger(sell_armor);
  upgrade_armor = validation.validateInteger(upgrade_armor);
  wealth = validation.validateInteger(wealth);
  enter_dungeon = validation.validateInteger(enter_dungeon);
  use_tavern = validation.validateInteger(use_tavern);
  retire = validation.validateInteger(retire);
  emigrate = validation.validateInteger(emigrate);
  garrison_wall = validation.validateInteger(garrison_wall);

  if (!name || buy_potion === undefined || sell_potion === undefined || upgrade_potion === undefined || 
    buy_weapon === undefined || sell_weapon === undefined || upgrade_weapon === undefined || buy_armor === undefined || 
    sell_armor === undefined || upgrade_armor === undefined || wealth === undefined || enter_dungeon === undefined || 
    use_tavern === undefined || retire === undefined || emigrate === undefined || garrison_wall === undefined) {
      console.log('town behavior post request missing field');
      res.status(400).send(false);
      return false;
  }
  try {
    TownBehavior.create({ name,
      buy_potion,
      sell_potion,
      upgrade_potion,
      buy_weapon,
      sell_weapon,
      upgrade_weapon,
      buy_armor,
      sell_armor,
      upgrade_armor,
      wealth,
      enter_dungeon,
      use_tavern,
      retire,
      emigrate,
      garrison_wall
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

behaviorRouter.put('/town_behavior', authorization, async (req, res) => {
  let {
    name,
    id,
    buy_potion,
    sell_potion,
    upgrade_potion,
    buy_weapon,
    sell_weapon,
    upgrade_weapon,
    buy_armor,
    sell_armor,
    upgrade_armor,
    wealth,
    enter_dungeon,
    use_tavern,
    retire,
    emigrate,
    garrison_wall
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  id = validation.validateInteger(id);
  buy_potion = validation.validateInteger(buy_potion);
  sell_potion = validation.validateInteger(sell_potion);
  upgrade_potion = validation.validateInteger(upgrade_potion);
  buy_weapon = validation.validateInteger(buy_weapon);
  sell_weapon = validation.validateInteger(sell_weapon);
  upgrade_weapon = validation.validateInteger(upgrade_weapon);
  buy_armor = validation.validateInteger(buy_armor);
  sell_armor = validation.validateInteger(sell_armor);
  upgrade_armor = validation.validateInteger(upgrade_armor);
  wealth = validation.validateInteger(wealth);
  enter_dungeon = validation.validateInteger(enter_dungeon);
  use_tavern = validation.validateInteger(use_tavern);
  retire = validation.validateInteger(retire);
  emigrate = validation.validateInteger(emigrate);
  garrison_wall = validation.validateInteger(garrison_wall);

  if (!name || buy_potion === undefined || sell_potion === undefined || upgrade_potion === undefined || 
    buy_weapon === undefined || sell_weapon === undefined || upgrade_weapon === undefined || buy_armor === undefined || 
    sell_armor === undefined || upgrade_armor === undefined || wealth === undefined || enter_dungeon === undefined || 
    use_tavern === undefined || retire === undefined || emigrate === undefined || garrison_wall === undefined) {
      console.log('town behavior post request missing field');
      res.status(400).send(false);
      return false;
  }

  if (id === undefined || id === null) {
    console.log('Attempted PUT request for town behavior without valid ID');
    res.status(400).send(false);
    return;
  }
  
  try {
    TownBehavior.update({
      name,
      buy_potion,
      sell_potion,
      upgrade_potion,
      buy_weapon,
      sell_weapon,
      upgrade_weapon,
      buy_armor,
      sell_armor,
      upgrade_armor,
      wealth,
      enter_dungeon,
      use_tavern,
      retire,
      emigrate,
      garrison_wall
    }, { where: {
      id: id
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  res.status(200).send(true);
})

module.exports = behaviorRouter;