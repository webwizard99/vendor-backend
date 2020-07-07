const express = require('express');
const editorReactChunks = require('../config/reactChunks');

const editorRouter = express.Router();

editorRouter.get('/', (req, res) => {
  const editorPrepend = '../public/editor/';
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