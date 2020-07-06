const express = require('express');
const reactChunks = require('../config/reactChunks');

const frontendRouter = express.Router();


frontendRouter.get('/', (req, res) => {
  const chunk1 = reactChunks.path + reactChunks.chunk1;
  const chunk2 = reactChunks.path + reactChunks.chunk2;
  const css = reactChunks.cssPath + reactChunks.css;

  res.render('index', {
    script1: chunk1,
    script2: chunk2,
    css: css
  });
});

module.exports = frontendRouter;