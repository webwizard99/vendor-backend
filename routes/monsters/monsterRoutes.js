const express = require('express');
const Monster = require('../../models/Monsters');

// middleware imports
const authorization = require('../../middleware/authorization');
// utility imports
const validation = require('../../utilities/validation');

const monsterRouter = express.Router();

module.exports = monsterRouter;