const express = require('express');
const db = require('./config/database');
const expressHbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const passport = require('passport');

require('./services/passport');

// route imports
const itemRoutes = require('./routes/items/itemRoutes');
const supplierRoutes = require('./routes/suppliers/supplierRoutes');
const frontendRoutes = require('./routes/frontEndRoutes');
const authRoutes = require('./routes/authroutes');
const editorRoutes = require('./routes/editorRoutes');

const app = express();

// require in mmodule to set React chunk file values
require('./utilities/setChunks');
require('./utilities/setEditorChunks');

app.use(bodyParser({ extended: true }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.use(cors());

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// view engine setup
app.engine('.hbs', expressHbs({ defaultLayout: null, extname: '.hbs', layoutsDir: __dirname + 'views/layouts' }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public', 'editor')));

// mount routers
app.use('/', itemRoutes);
app.use('/', supplierRoutes);
app.use('/', frontendRoutes);
app.use('/', authRoutes);
app.use('/editor', express.static(path.join(__dirname, 'public', 'editor')), editorRoutes);

app.listen(PORT);