const express = require('express');
const Item = require('../../models/Item');
const Weapon = require('../../models/Weapon');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');

const weaponRouter = express.Router();