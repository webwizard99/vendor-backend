const express = require('express');
const editorReactChunks = require('../config/reactChunks');

const editorRouter = express.Router();

editorRouter.get('/', (req, res) => {
  const chunk1 = 'editor/' + editorReactChunks.path + editorReactChunks.chunk1;
  const chunk2 = 'editor/' + editorReactChunks.path + editorReactChunks.chunk2;
  const css = editorReactChunks.cssPath + editorReactChunks.css;

  res.render('editorIndex', {
    script1: chunk1,
    script2: chunk2,
    css: css
  });
});

module.exports = editorRouter;