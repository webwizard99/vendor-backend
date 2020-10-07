const express = require('express');
const Adventurer = require('../../../models/Adventurer');
// middleware imports
const authorization = require('../../../middleware/authorization');
// utility imports
const validation = require('../../../utilities/validation');

const adventurerRouter = express.Router();

adventurerRouter.get('/adventurers', async (req, res) => {
  try {
    let allAdventurers = await Adventurer.findAll();
    res.status(200).send(allAdventurers);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
});

module.exports = adventurerRouter;