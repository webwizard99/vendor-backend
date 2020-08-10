const express = require('express');
const Item = require('../../models/Item');
const Potion = require('../../models/Potion');
// const Sequelize = require('sequelize');

const itemTypes = require('../../config/itemTypes');
const potionTypes = require('../../config/potionTypes');
const authorization = require('../../middleware/authorization');

const potionRouter = express.Router();

potionRouter.param('itemId', (req, res, next, id) => {
  console.log('param middleware for id reached');
  console.log(id);
  req.id = id;
  next();
});

// GET route for all potions
potionRouter.get('/potions', (req, res) => {
  console.log('potions GET route reached...');
  Potion.belongsTo(Item);
  Potion.findAll({
    include: 
      { model: Item }
  })
    .then(potion => {
      res.status(200).send(potion)})
    .catch(err => console.log(err));
});

// POST and PUT route (due to composition of request through
// HTML form only allowing POST request) for potions
potionRouter.post('/potions', authorization, async (req, res) => {
  console.log('potions POST/PUT route reached');
  let {
    name,
    value,
    details,
    type,
    level,
    id,
    itemId,
    _METHOD
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }
  if (value && typeof value !== 'number') {
    value = Number.parseInt(value);
  }
  if (details && typeof details !== 'string') {
    details = details.toString();
  }
  if (type && typeof type !== 'string') {
    type = type.toString();
  }
  if (level && typeof level !== 'number') {
    level = Number.parseInt(level);
  }

  // reject request if missing a field
  if (!name || !value || !type || !level || !potionTypes[type]) {
    console.log('potion post request missing field');
    res.status(400).send();
    return false;
  }

  // handle PUT request
  if (_METHOD === '_put') {
    console.log('PUT method sent to potions POST route');

    console.log(`id: ${id}, itemId: ${itemId}`);

    if (id !== null && typeof id !== 'number') {
      id = Number.parseInt(id);
    }

    if (itemId !== null && typeof itemId !== 'number') {
      itemId = Number.parseInt(itemId);
    }

    if (id === null || itemId === null) {
      console.log('Attempted PUT request without valid ID');
      res.status(400).redirect('/editor');
      return;
    }

    let updatedItem;
    try {
      updatedItem = await Item.update({
        name,
        type,
        value,
        details
    }, { where: {
      id: itemId
    }});
    } catch(err) {
      console.log(err);
    }

    let updatedPotion;
    try {
      updatedPotion = await Potion.update({
        type,
        level
      }, { where: {
        id: id
      }})
    } catch (err) {
      console.log(err);
    }
      
    res.status(200).redirect('/editor');
    return;
  }

  // attempt to create a new Item
  let newItem;
  try {
      newItem = await Item.create({
      name,
      type: itemTypes.potion,
      value,
      details
    });
  } catch(err) {
    console.log(err);
  }

  // capture item id for foreign key to create Potion
  const newItemId = newItem.id;
  let newPotion;
  try {
    newPotion = await Potion.create({
      itemId: newItemId,
      type,
      level
    });
  } catch(err) {
    console.log(err);
  }

  res.status(200).redirect('/editor'); 

});

// DELETE route for potions
potionRouter.delete('/potion/:itemId', async (req, res) => {
  let id = req.id;
  console.log(`id: ${id}`);

  // Validate data
  if (id && typeof id != 'number') {
    id = Number.parseInt(id);
  }

  // Get potion with ID sent to route
  if (!id) {
    res.status(400).send();
  } else {
    let delPotion;
    try {
      // Potion.belongsTo(Item);
      delPotion = await Potion.findAll({
        where: {
          id: id
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }

    // Await retrieval of potion so Item foreign key may
    // be retreived to allow Item to be deleted along with
    // Potion.
    Promise.allSettled(delPotion)
      .then(async (result) => {
        
        const itemId = delPotion[0].dataValues.itemId;

        try {
          Potion.destroy({ where: { id: id }});
        } catch (err) {
          console.log(err);
          res.status(400).send();
        }
    
        try {
          Item.destroy({ where: { id: itemId }}) 
        } catch (err) {
          console.log(err);
          res.status(400).send();
        }
      });
  }
});

module.exports = potionRouter;