const express = require('express');
const Adventurer = require('../../../models/Adventurer');
// middleware imports
const authorization = require('../../../middleware/authorization');
// utility imports
const validation = require('../../../utilities/validation');

const adventurerRouter = express.Router();

module.exports = adventurerRouter;