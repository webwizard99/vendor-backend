const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');

const User = require('../models/User');

// turn user into cookie
passport.serializeUser((user, done) => {
  done(null, user.facebookId);
});

// get user from cookie
passport.deserializeUser((id, done) => {
  User.findOne({
    where: { facebookId: id}
  })
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id'],
    proxy: true
  },

  async function(accessToken, refreshToken, profile, done) {
    const existingUser = await User.findOne(
      { where: { facebookId: profile.id }
    });
      
    if (existingUser) {
      // already have a record
      return done(null, existingUser);
    } 
    
    // create a new user
    const user = await User.Create(
      { facebookId: profile.id });
    return done(null, user);
  }
));