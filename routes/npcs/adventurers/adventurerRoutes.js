const express = require('express');
const Adventurer = require('../../../models/Adventurer');
const TownBehavior = require('../../../models/TownBehaviors');
const DungeonBehavior = require('../../../models/DungeonBehaviors');
const AdventurerClass = require('../../../models/AdventurerClass');

// middleware imports
const authorization = require('../../../middleware/authorization');
// utility imports
const validation = require('../../../utilities/validation');

const adventurerRouter = express.Router();

adventurerRouter.param(':adventurerId', (req, res, next, id) => {
  req.id = id;
  next();
});

adventurerRouter.get('/adventurers', async (req, res) => {
  try {
    let allAdventurers = await Adventurer.findAll();
    res.status(200).send(allAdventurers);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

adventurerRouter.get('/adventurers-full', async (req, res) => {
  try {
    Adventurer.belongsTo(TownBehavior);
    TownBehavior.hasMany(Adventurer);
    Adventurer.belongsTo(DungeonBehavior);
    DungeonBehavior.hasMany(Adventurer);
    Adventurer.belongsTo(AdventurerClass);
    AdventurerClass.hasMany(Adventurer);
    let adventurers = await Adventurer.findAll({
      include: [
        { model: TownBehavior },
        { model: DungeonBehavior },
        { model: AdventurerClass }
      ]
    });
    res.status(200).send(adventurers);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
});

adventurerRouter.post('/adventurer', authorization, async (req, res) => {
  let {
    name,
    strength,
    speed,
    cunning,
    intelligence,
    constitution,
    dungeon_behavior_id,
    town_behavior_id,
    adventurer_class_id
  } = req.body;

  // validate input types
  if (name && typeof name!== 'string') {
    name = name.toString();
  }
  strength = validation.validateInteger(strength);
  speed = validation.validateInteger(speed);
  cunning = validation.validateInteger(cunning);
  intelligence = validation.validateInteger(intelligence);
  constitution = validation.validateInteger(constitution);
  dungeon_behavior_id = validation.validateInteger(dungeon_behavior_id);
  town_behavior_id = validation.validateInteger(town_behavior_id);
  adventurer_class_id = validation.validateInteger(adventurer_class_id);

  if (!name || strength === undefined || speed === undefined || 
    cunning === undefined || intelligence === undefined || constitution === undefined || 
    dungeon_behavior_id === undefined || town_behavior_id === undefined || 
    adventurer_class_id === undefined) {
      console.log('adventurer POST request missing field');
      res.status(400).send(false);
      return;
  }
  try {
    Adventurer.create({
      name,
      strength,
      speed,
      cunning,
      intelligence,
      constitution,
      dungeon_behavior_id,
      town_behavior_id,
      adventurer_class_id
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

adventurerRouter.put('/adventurer', authorization, async (req, res) => {
  let {
    id,
    name,
    strength,
    speed,
    cunning,
    intelligence,
    constitution,
    dungeon_behavior_id,
    town_behavior_id,
    adventurer_class_id
  } = req.body;

  // validate input types
  if (name && typeof name!== 'string') {
    name = name.toString();
  }
  if (id === undefined || id === null) {
    console.log('Attempted PUT request for adventurer without ID');
    res.status(400).send(false);
    return;
  }
  id = validation.validateInteger(id);
  strength = validation.validateInteger(strength);
  speed = validation.validateInteger(speed);
  cunning = validation.validateInteger(cunning);
  intelligence = validation.validateInteger(intelligence);
  constitution = validation.validateInteger(constitution);
  dungeon_behavior_id = validation.validateInteger(dungeon_behavior_id);
  town_behavior_id = validation.validateInteger(town_behavior_id);
  adventurer_class_id = validation.validateInteger(adventurer_class_id);

  if (!name || strength === undefined || speed === undefined || 
    cunning === undefined || intelligence === undefined || constitution === undefined || 
    dungeon_behavior_id === undefined || town_behavior_id === undefined || 
    adventurer_class_id === undefined) {
      console.log('adventurer POST request missing field');
      res.status(400).send(false);
      return;
  }

  try {
    Adventurer.update({
      name,
      strength,
      speed,
      cunning,
      intelligence,
      constitution,
      dungeon_behavior_id,
      town_behavior_id,
      adventurer_class_id
    }, { where: { id: id }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

adventurerRouter.delete('/adventurer/:adventurerId', authorization, async (req, res) => {
  let id = req.id;
  if (id === null || id === undefined) {
    res.status(400).send(false);
    return;
  }
  id = validation.validateInteger(id);

  try {
    Adventurer.destroy({ where : { id: id } });
  } catch (err) {
    console.log(err);
    res.status.send(false);
    return;
  }
  res.status(200).send(true);
});

module.exports = adventurerRouter;