const express = require('express');
// model imports
const DungeonTile = require('../../models/DungeonTile');
// middleware imports
const authorization = require('../../middleware/authorization');
// utitlity imports
const validation = require('../../utilities/validation');

const dungeonTileRouter = express.Router();

dungeonTileRouter.param(':tileId', (req, res, next, id) => {
  req.id = id;
  next();
});

dungeonTileRouter.get('/dungeon_tiles', async (req, res) => {
  
  try {
    let dungeonTiles = await DungeonTile.findAll();
    res.status(200).send(dungeonTiles);
  } catch(err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
});

dungeonTileRouter.post('/dungeon_tile', authorization, async (req, res) => {
  let {
    name,
    boss,
    stairs_up,
    treasure,
    encounter,
    trap
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  boss = validation.validateBoolean(boss);
  stairs_up = validation.validateBoolean(stairs_up);
  treasure = validation.validateInteger(treasure);
  encounter = validation.validateInteger(encounter);
  trap = validation.validateInteger(trap);

  if (!name || treasure === undefined || encounter === undefined || 
    trap === undefined) {
      console.log('dungeon tile POST request missing field');
      res.status(400).send(false);
      return;
  }
  try {
    DungeonTile.create({
      name,
      boss,
      stairs_up,
      treasure,
      encounter,
      trap
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

dungeonTileRouter.put('/dungeon_tile', authorization, async (req, res) => {
  let {
    id,
    name,
    boss,
    stairs_up,
    treasure,
    encounter,
    trap
  } = req.body;

  // validate input types
  if (id === undefined || id === null) {
    console.log('Attempted PUT request for dungeon tile with invalid id');
    res.status(400).send(false);
    return;
  }
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  id = validation.validateInteger(id);
  boss = validation.validateBoolean(boss);
  stairs_up = validation.validateBoolean(stairs_up);
  treasure = validation.validateInteger(treasure);
  encounter = validation.validateInteger(encounter);
  trap = validation.validateInteger(trap);

  if (!name || treasure === undefined || encounter === undefined || 
    trap === undefined) {
      console.log('dungeon tile PUT request missing field');
      res.status(400).send(false);
      return;
  }

  try {
    DungeonTile.update({
      name,
      boss,
      stairs_up,
      treasure,
      encounter,
      trap
    }, { where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
});

dungeonTileRouter.delete('/dungeon_tile/:tileId', authorization, async (req, res) => {
  let id = req.id;
  if (id === null || id === undefined) {
    res.status(400).send(false);
    return;
  }
  id = validation.validateInteger(id);

  try {
    DungeonTile.destroy({ where: { id: id } });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  res.status(200).send(true);
})

module.exports = dungeonTileRouter;