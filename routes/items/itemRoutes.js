const express = require('express');

// require item type routers
const potionRoutes = require('./potionRoutes');
const weaponsRoutes = require('./weaponRoutes');

const itemRouter = express.Router();

// mount item type routes
itemRouter.use('/', potionRoutes);
itemRouter.use('/', weaponsRoutes);

module.exports = itemRouter;