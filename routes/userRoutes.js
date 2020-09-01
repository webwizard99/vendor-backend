const express = require('express');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.put('/user', (req, res) => {
  let {
    id,
    nickname,
    import_nickname
  } = req.body;

  // validate input types
  if (id && typeof id !== 'number') {
    id = Number.parseInt(id);
  }
  if (nickname && typeof nickname !== 'string') {
    nickname = nickname.toString();
  }
  if (import_nickname !== null && typeof import_nickname !== 'boolean') {
    if (typeof import_nickname === 'string' && import_nickname.toLowerCase() === 'true') {
      import_nickname = true;
    } else {
      import_nickname = false;
    }
    
  }
  if (id === null) {
    console.log('Attempted PUT request without valid ID');
    res.status(400).send(false);
    return;
  }

  let updateObj = {};
  if (nickname) {
    updateObj.nickname = nickname;
  }
  updateObj.import_nickname = import_nickname;

  try {
    User.update(updateObj, {where: { id: id }});
  } catch (err) {
    console.log(err);
    res.status(400).send(false);
    return;
  }

  res.status(200).send(true);
})

module.exports = userRouter;