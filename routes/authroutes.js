const express = require('express');
const passport = require('passport');


const authRouter = express.Router();

authRouter.get('/auth/facebook',
  passport.authenticate('facebook')
);

authRouter.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/'
  }), (req, res) => {
    res.redirect('/');
  }
);

authRouter.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

authRouter.get('/api/current_user', (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

module.exports = authRouter;