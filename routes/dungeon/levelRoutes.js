const express = require('express');
const Level = require('../../models/Level');
const TileAssignment = require('../../models/TileAssignment');
const DropList = require('../../models/DropList');

// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');

const levelRouter = express.Router();

levelRouter.get('/levels', async (req, res) => {
  try {
    Level.hasMany(TileAssignment);
    TileAssignment.belongsTo(Level);
    let allLevels = await Level.findAll({
      include: {
        model: TileAssignment
      }
    });
    res.status(200).send(allLevels);
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
  }
})

module.exports = levelRouter;