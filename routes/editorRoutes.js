const express = require('express');
const editorReactChunks = require('../config/editorReactChunks');

const userTypes = require('../config/userTypes');
const authorization = require('../middleware/authorization');

const editorRouter = express.Router();

editorRouter.get('/', authorization, (req, res) => {
  if (req.authorization !== userTypes.owner) {
    res.redirect('/');
  }
  
  const editorPrepend = '';
  const chunk1 = editorPrepend + editorReactChunks.path + editorReactChunks.chunk1;
  const chunk2 = editorPrepend + editorReactChunks.path + editorReactChunks.chunk2;
  const css = editorPrepend + editorReactChunks.cssPath + editorReactChunks.css;

  res.render('editorIndex', {
    script1: chunk1,
    script2: chunk2,
    css: css
  });
});

module.exports = editorRouter;