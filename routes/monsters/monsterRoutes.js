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

module.exports = monsterRouter;