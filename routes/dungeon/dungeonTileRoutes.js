const express = require('express');
// model imports
const DungeonTile = require('../../models/DungeonTile');
// middleware imports
const authorization = require('../../middleware/authorization');
// utitlity imports
const validation = require('../../utilities/validation');

const dungeonTileRouter = express.Router();

dungeonTileRouter.get('dungeon_tiles', async (req, res) => {
  
  try {
    let dungeonTiles = await DungeonTile.findAll();
    res.status(200).send(dungeonTiles);
  } catch(err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
});

module.exports = dungeonTileRouter;