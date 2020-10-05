const express = require('express');
const AdventurerClass = require('../../../models/AdventurerClass');
// middleware imports
const authorization = require('../../../middleware/authorization');
// utility imports
const validation = require('../../../utilities/validation');

const classRouter = express.Router();

classRouter.get('/adventurer_classes', async (req, res) => {
  try {
    let allAdventurerClasses = await AdventurerClass.findAll();
    res.status(200).send(allAdventurerClasses);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

classRouter.post('/adventurer_class', authorization, async (req, res) => {
  let {
    name,
    bargaining,
    perception,
    artifacts,
    traps,
    agility,
    tactics,
    martial_weapons,
    armor,
    anatomy
  } = req.body;

  // validate input types
  if (name && typeof name!== 'string') {
    name = name.toString();
  }
  bargaining = validation.validateInteger(bargaining);
  perception = validation.validateInteger(perception);
  artifacts = validation.validateInteger(artifacts);
  traps = validation.validateInteger(traps);
  agility = validation.validateInteger(agility);
  tactics = validation.validateInteger(tactics);
  martial_weapons = validation.validateInteger(martial_weapons);
  armor = validation.validateInteger(armor);
  anatomy = validation.validateInteger(anatomy);
  
  if (!name || bargaining === undefined || perception === undefined || 
    artifacts === undefined || traps === undefined || agility === undefined || 
    tactics === undefined || martial_weapons === undefined || armor === undefined || 
    anatomy === undefined) {
      console.log('adventurer class post request missing field');
      res.status(400).send(false);
      return;
    }
    try {
      AdventurerClass.create({
        name,
        bargaining,
        perception,
        artifacts,
        traps,
        agility,
        tactics,
        martial_weapons,
        armor,
        anatomy
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(false);
      return;
    }
    res.status(200).send(true);
});

classRouter.put('/adventurer_class', authorization, async (req, res) => {
  let {
    id,
    name,
    bargaining,
    perception,
    artifacts,
    traps,
    agility,
    tactics,
    martial_weapons,
    armor,
    anatomy
  } = req.body;

  // validate input types
  if (name && typeof name!== 'string') {
    name = name.toString();
  }
  if (id === undefined || id === null) {
    console.log('Attempted PUT request for town behavior without valid id');

  }
  id = validation.validateInteger(id);
  bargaining = validation.validateInteger(bargaining);
  perception = validation.validateInteger(perception);
  artifacts = validation.validateInteger(artifacts);
  traps = validation.validateInteger(traps);
  agility = validation.validateInteger(agility);
  tactics = validation.validateInteger(tactics);
  martial_weapons = validation.validateInteger(martial_weapons);
  armor = validation.validateInteger(armor);
  anatomy = validation.validateInteger(anatomy);
  
  if (!name || bargaining === undefined || perception === undefined || 
    artifacts === undefined || traps === undefined || agility === undefined || 
    tactics === undefined || martial_weapons === undefined || armor === undefined || 
    anatomy === undefined) {
      console.log('adventurer class post request missing field');
      res.status(400).send(false);
      return;
  }

  try {
    AdventurerClass.update({
      name,
      bargaining,
      perception,
      artifacts,
      traps,
      agility,
      tactics,
      martial_weapons,
      armor,
      anatomy
    }, { where: { id: id 
    }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

module.exports = classRouter;