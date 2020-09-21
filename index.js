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

// architectural route imports
const authRoutes = require('./routes/authroutes');
const frontendRoutes = require('./routes/frontEndRoutes');
const editorRoutes = require('./routes/editorRoutes');
// item route imports
const itemRoutes = require('./routes/items/itemRoutes');
const supplierRoutes = require('./routes/suppliers/supplierRoutes');
// profile imports
const userRoutes = require('./routes/userRoutes');
// adventurer imports
const behaviorRouter = require('./routes/npcs/behaviors/behaviorRoutes');

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

// mount architectural routers
app.use('/', authRoutes);
app.use('/', frontendRoutes);
app.use('/editor', express.static(path.join(__dirname, 'public', 'editor')), editorRoutes);
// mount item routes
app.use('/', itemRoutes);
app.use('/', supplierRoutes);
// mount profile route
app.use('/', userRoutes);
// mount adventurer routes
app.use('/', behaviorRouter);

app.listen(PORT);