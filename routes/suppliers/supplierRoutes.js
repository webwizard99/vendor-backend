const express = require('express');
const Supplier = require('../../models/Supplier');
const Offering = require('../../models/Offering');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');

const supplierRouter = express.Router();

supplierRouter.get('/suppliers', async (req, res) => {
  
  let suppliers;
  try {
    Supplier.hasMany(Offering);
    Offering.belongsTo(Supplier);
    suppliers = await Supplier.findAll({
      include: {
        model: Offering
      }
    })
  } catch (err) {
    console.log(err);
    res.status(400).send();
    return;
  }

  res.status(200).send(suppliers);
  
});

supplierRouter.post('/supplier', authorization, async (req, res) => {
  let {
    name,
    newIndexes
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }

  // reject request if missing a field
  if (!name) {
    console.log('supplier post request missing field');
    res.status(400).send();
    return false;
  }

  if (typeof newIndexes === 'string') {
    newIndexes = newIndexes.split(',')
  }

  Supplier.hasMany(Offering);
  Offering.belongsTo(Supplier);

  let newSupplier;
  try {
    newSupplier = await Supplier.create({
      name
    });
  } catch(err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  // If no offerings sent with supplier POST request, finish request
  if (newIndexes.length <= 0) {
    res.status(200).send(true);
    return;
  }

  // attempt to add all new offerings sent with POST request
  for (let index of newIndexes) {
    let offeringType = req.body[`new-offering-${index}-type`];
    let offeringMarkup = req.body[`new-offering-${index}-markup`];

    // validate inputs
    if (offeringType && typeof offeringType !== 'string') {
      offeringType = offeringType.toString();
    }
    if (offeringMarkup && typeof offeringMarkup !== 'number') {
      offeringMarkup = Number.parseInt(offeringMarkup);
    }
    if (!offeringType || !offeringMarkup) {
      console.log('attempted to create offering with missing field');
      res.status(400).send();
    }

    let newOffering;
    try {
      newOffering = await Offering.create({
        type: offeringType,
        markup: offeringMarkup,
        supplierId: newSupplier.id
      });
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  }

  res.status(200).send(true);
});

// Route to for suppliers PUT and PUT, POST, and DELETE of associated
// offerings
supplierRouter.put('supplier', authorization, async(req, res) => {
  let {
    name,
    existingIds,
    deletedIds,
    newIndexes
  } = req.body;

  // validate input types
  if (name && typeof name !== 'string') {
    name = name.toString();
  }

  // reject request if missing a field
  if (!name) {
    console.log('supplier post request missing field');
    res.status(400).send();
    return false;
  }

  if (typeof existingIds === 'string') {
    existingIds = existingIds.split(',');
  }
  if (typeof deletedIds === 'string' && deletedIds !== '') {
    deletedIds = deletedIds.split(',');
  }
  if (typeof newIndexes === 'string' && newIndexes !== '') {
    newIndexes = newIndexes.split(',');
  }

  // associate models
  Supplier.hasMany(Offering);
  Offering.belongsTo(Supplier);

  // update supplier model
  let updatedSupplier;
  try {
    updatedSupplier = await Supplier.update({
      name: name
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }
  
  // handle existing offerings to be deleted
  if (deletedIds.length > 0) {
    for (let delId of deletedIds) {
      // remove any ids to be deleted from existing list
      if (existingIds.include(delId)) {
        let delIndex = existingIds.indexOf(delId);
        existingIds.splice(delIndex);
      }
  
      // delete offering from database
      try {
        Offering.destroy({ where: { id: delId }});
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  // handle existing offerings
  if (existingIds.length > 0) {
    for (let existId of existingIds) {
      let offeringType = req.body[`offering-${existId}-type`];
      let offeringMarkup = req.body[`offering-${existId}-markup`];
  
      // validate inputs
      if (offeringType && typeof offeringType !== 'string') {
        offeringType = offeringType.toString();
      }
      if (offeringMarkup && typeof offeringMarkup !== 'number') {
        offeringMarkup = Number.parseInt(offeringMarkup);
      }
      if (!offeringType || !offeringMarkup) {
        console.log('attempted to update offering with missing field');
        res.status(400).send();
      }
  
      // update model
      try {
        Offering.update({
          type: offeringType,
          markup: offeringMarkup
        }, { where : {
          id: existId
        }});
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  // If no offerings sent with supplier PUT request, finish request
  if (newIndexes.length <= 0) {
    res.status(200).send(true);
    return;
  }

  // attempt to add all new offerings sent with PUT request
  for (let index of newIndexes) {
    let offeringType = req.body[`new-offering-${index}-type`];
    let offeringMarkup = req.body[`new-offering-${index}-markup`];

    // validate inputs
    if (offeringType && typeof offeringType !== 'string') {
      offeringType = offeringType.toString();
    }
    if (offeringMarkup && typeof offeringMarkup !== 'number') {
      offeringMarkup = Number.parseInt(offeringMarkup);
    }
    if (!offeringType || !offeringMarkup) {
      console.log('attempted to create offering with missing field');
      res.status(400).send();
    }

    let newOffering;
    try {
      newOffering = await Offering.create({
        type: offeringType,
        markup: offeringMarkup,
        supplierId: newSupplier.id
      });
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  }

  res.status(200).send(true);

});

module.exports = supplierRouter;