const express = require('express');
const AdventurerClass = require('../../../models/AdventurerClass');
// middleware imports
// utility imports
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

module.exports = classRouter;