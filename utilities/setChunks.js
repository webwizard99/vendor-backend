const reactChunks = require('../config/reactChunks');
const fs = require('fs');
const path = require('path');


let jsDir = fs.readdirSync(path.join(__dirname, '../', 'public', 'build', 'static', 'js'));
let jsChunks = jsDir.filter((jsFile) => { return jsFile.match(/.*\.(js)/ig);});

let cssDir = fs.readdirSync(path.join(__dirname, '../', 'public', 'build', 'static', 'css'));
let cssChunk = cssDir.filter((cssFile) => { return cssFile.match(/.*\.(css)/ig)});

reactChunks.chunk1 = jsChunks[0];
reactChunks.chunk2 = jsChunks[3];
reactChunks.css = cssChunk[0];