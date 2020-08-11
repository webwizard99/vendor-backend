const express = require('express');

// require item type routers
const potionRoutes = require('./potionRoutes');
const weaponsRoutes = require('./weaponRoutes');
const armorRoutes = require('./armorRoutes');

const itemRouter = express.Router();

// mount item type routes
itemRouter.use('/', potionRoutes);
itemRouter.use('/', weaponsRoutes);
itemRouter.use('/', armorRoutes);

module.exports = itemRouter;