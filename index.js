const express = require('express');
const db = require('./config/database');

// route imports
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use('/', itemRoutes);

const PORT = process.env.PORT || 5000;

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.listen(PORT);