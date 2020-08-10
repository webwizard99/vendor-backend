const express = require('express');

// require item type routers
const potionRoutes = require('./potionRoutes');

const itemRouter = express.Router();

// mount item type routes
itemRouter.use('/', potionRoutes);

module.exports = itemRouter;