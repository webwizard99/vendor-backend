const express = require('express');
const Supplier = require('../../models/Supplier');
const Offering = require('../../models/Offering');

const itemTypes = require('../../config/itemTypes');
const authorization = require('../../middleware/authorization');
const { Sequelize, DataTypes } = require('sequelize/types');

const supplierRouter = express.Router();

supplierRouter.get('/suppliers', async (req, res) => {
  console.log('suppliers GET route reached...');
  
  let offerings;
  try {
    // const SupplierOfferings = Sequelize.define('SupplierOfferings', {
    //   SupplierId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: Supplier,
    //       key: 'id'
    //     }
    //   },
    //   OfferingId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: Offering,
    //       key: 'id'
    //     }
    //   }
    // });
    Offering.belongsToMany(Supplier, { through: "SupplierOfferings" });
    Supplier.belongsToMany(Offering, { through: "SupplierOfferings" });
    offerings = await Offering.findAll(
      // include: {
      //   model: Supplier
      // }
      // group: ['supplierId']
      // order: [
      //   [ { model: Supplier, as: 'Supplier'}, 'id' ]
      // ]
    );
  } catch (err) {
    console.log(err);
    res.status(400).send();
    return;
  }

  res.status(200).send(offerings);

  // let suppliers;
  // try {
  //   // Offering.belongsTo(Supplier);
  //   suppliers = await Supplier.findAll({
  //     // include: {
  //     //   model: Offering
  //     // }
  //   })
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).send();
  //   return;
  // }

  res.status(200).send(suppliers);
  
})

module.exports = supplierRouter;