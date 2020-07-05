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
const itemRoutes = require('./routes/itemRoutes');
const frontendRoutes = require('./routes/frontEndRoutes');
const authRoutes = require('./routes/authroutes');

const app = express();

// require in mmodule to set React chunk file values
require('./utilities/setChunks');

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: keys.cookieKey
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

// mount routers
app.use('/', itemRoutes);
app.use('/', frontendRoutes);
app.use('/', authRoutes);

app.listen(PORT);