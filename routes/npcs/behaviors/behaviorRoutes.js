const express = require('express');
const TownBehavior = require('../../../models/TownBehaviors');
const DungeonBehavior = require('../../../models/DungeonBehaviors');
// middleware imports
const authorization = require('../../../middleware/authorization');
// utility imports
const validation = require('../../../utilities/validation');
const behaviorRouter = express.Router();

behaviorRouter.param(':behaviorId', (req, res, next, id) => {
  req.id = id;
  next();
});

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
      console.log('town behavior put request missing field');
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
});

behaviorRouter.delete('/town_behavior/:behaviorId', authorization, async (req, res) => {
  let id = req.id;
  id = validation.validateInteger(id);

  if (id === null || id === undefined) {
    res.status(400).send(false);
  }

  try {
    TownBehavior.destroy({ where: { id: id }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

behaviorRouter.post('/dungeon_behavior', authorization, async (req, res) => {
  let {
    name,
    advance_tile,
    conserve_health,
    use_potion,
    rest,
    return_to_town,
    check_for_traps,
    disarm_trap,
    avoid_trap,
    search_for_treasure,
    fight_monster,
    flee_encounter,
    defend,
    attack,
    check_monster_weakness,
    explore_level,
    advance_next_level,
    fill_inventory,
    upgrade_inventory,
    fight_boss_monster,
    prefer_weaker_monster,
    try_for_level
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  advance_tile = validation.validateInteger(advance_tile);
  conserve_health = validation.validateInteger(conserve_health);
  use_potion = validation.validateInteger(use_potion);
  rest = validation.validateInteger(rest);
  return_to_town = validation.validateInteger(return_to_town);
  check_for_traps = validation.validateInteger(check_for_traps);
  disarm_trap = validation.validateInteger(disarm_trap);
  avoid_trap = validation.validateInteger(avoid_trap);
  search_for_treasure = validation.validateInteger(search_for_treasure);
  fight_monster = validation.validateInteger(fight_monster);
  flee_encounter = validation.validateInteger(flee_encounter);
  defend = validation.validateInteger(defend);
  attack = validation.validateInteger(attack);
  check_monster_weakness = validation.validateInteger(check_monster_weakness);
  explore_level = validation.validateInteger(explore_level);
  advance_next_level = validation.validateInteger(advance_next_level);
  fill_inventory = validation.validateInteger(fill_inventory);
  upgrade_inventory = validation.validateInteger(upgrade_inventory);
  fight_boss_monster = validation.validateInteger(fight_boss_monster);
  prefer_weaker_monster = validation.validateInteger(prefer_weaker_monster);
  try_for_level = validation.validateInteger(try_for_level);

  if (!name || advance_tile === undefined || conserve_health === undefined ||
    use_potion === undefined || rest === undefined || return_to_town === undefined || 
    check_for_traps === undefined || disarm_trap === undefined || avoid_trap === undefined || 
    search_for_treasure === undefined || fight_monster === undefined || flee_encounter === undefined || 
    defend === undefined || attack === undefined || check_monster_weakness === undefined || 
    explore_level === undefined || advance_next_level === undefined || 
    fill_inventory === undefined || upgrade_inventory === undefined || 
    fight_boss_monster === undefined || prefer_weaker_monster === undefined || try_for_level === undefined) {
      console.log('dungeon behavior post request missing field');
      res.status(400).send(false);
      return;
  }
  try {
    DungeonBehavior.create({
      name,
      advance_tile,
      conserve_health,
      use_potion,
      rest,
      return_to_town,
      check_for_traps,
      disarm_trap,
      avoid_trap,
      search_for_treasure,
      fight_monster,
      flee_encounter,
      defend,
      attack,
      check_monster_weakness,
      explore_level,
      advance_next_level,
      fill_inventory,
      upgrade_inventory,
      fight_boss_monster,
      prefer_weaker_monster,
      try_for_level
    });
  } catch(err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

behaviorRouter.put('/dungeon_behavior', authorization, async (req, res) => {
  let {
    name,
    id,
    advance_tile,
    conserve_health,
    use_potion,
    rest,
    return_to_town,
    check_for_traps,
    disarm_trap,
    avoid_trap,
    search_for_treasure,
    fight_monster,
    flee_encounter,
    defend,
    attack,
    check_monster_weakness,
    explore_level,
    advance_next_level,
    fill_inventory,
    upgrade_inventory,
    fight_boss_monster,
    prefer_weaker_monster,
    try_for_level
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  id = validation.validateInteger(id);
  advance_tile = validation.validateInteger(advance_tile);
  conserve_health = validation.validateInteger(conserve_health);
  use_potion = validation.validateInteger(use_potion);
  rest = validation.validateInteger(rest);
  return_to_town = validation.validateInteger(return_to_town);
  check_for_traps = validation.validateInteger(check_for_traps);
  disarm_trap = validation.validateInteger(disarm_trap);
  avoid_trap = validation.validateInteger(avoid_trap);
  search_for_treasure = validation.validateInteger(search_for_treasure);
  fight_monster = validation.validateInteger(fight_monster);
  flee_encounter = validation.validateInteger(flee_encounter);
  defend = validation.validateInteger(defend);
  attack = validation.validateInteger(attack);
  check_monster_weakness = validation.validateInteger(check_monster_weakness);
  explore_level = validation.validateInteger(explore_level);
  advance_next_level = validation.validateInteger(advance_next_level);
  fill_inventory = validation.validateInteger(fill_inventory);
  upgrade_inventory = validation.validateInteger(upgrade_inventory);
  fight_boss_monster = validation.validateInteger(fight_boss_monster);
  prefer_weaker_monster = validation.validateInteger(prefer_weaker_monster);
  try_for_level = validation.validateInteger(try_for_level);

  if (!name || advance_tile === undefined || conserve_health === undefined ||
    use_potion === undefined || rest === undefined || return_to_town === undefined || 
    check_for_traps === undefined || disarm_trap === undefined || avoid_trap === undefined || 
    search_for_treasure === undefined || fight_monster === undefined || flee_encounter === undefined || 
    defend === undefined || attack === undefined || check_monster_weakness === undefined || 
    explore_level === undefined || advance_next_level === undefined || 
    fill_inventory === undefined || upgrade_inventory === undefined || 
    fight_boss_monster === undefined || prefer_weaker_monster === undefined || try_for_level === undefined) {
      console.log('dungeon behavior put request missing field');
      res.status(400).send(false);
      return;
  }

  if (id === undefined || id === null) {
    console.log('Attempted PUT request for dungeon behavior without id');
    res.status(400).send(false);
  }

  try {
    DungeonBehavior.update({
      name,
      advance_tile,
      conserve_health,
      use_potion,
      rest,
      return_to_town,
      check_for_traps,
      disarm_trap,
      avoid_trap,
      search_for_treasure,
      fight_monster,
      flee_encounter,
      defend,
      attack,
      check_monster_weakness,
      explore_level,
      advance_next_level,
      fill_inventory,
      upgrade_inventory,
      fight_boss_monster,
      prefer_weaker_monster,
      try_for_level
    }, { where: {
      id: id
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  res.status(200).send(true);
});

behaviorRouter.delete('/dungeon_behavior/:behaviorId', authorization, async (req, res) => {
  let id = req.id;
  id = validation.validateInteger(id);

  if (id === null || id === undefined) {
    res.status(400).send(false);
  }

  try {
    DungeonBehavior.destroy({ where: { id: id }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
  res.status(200).send(true);
});

module.exports = behaviorRouter;