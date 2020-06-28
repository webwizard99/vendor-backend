const reactChunks = require('../config/reactChunks');
const fs = require('fs');
const path = require('path');


let jsDir = fs.readdirSync(path.join(__dirname, '../', 'public', 'build', 'static', 'js'));
let jsChunks = jsDir.filter((jsFile) => { return jsFile.match(/.*\.(js)$/ig);});
jsChunks = jsChunks.filter((jsfile) => { return jsFile.match(/^[^r].+/ig);});
console.log(jsChunks);

let cssDir = fs.readdirSync(path.join(__dirname, '../', 'public', 'build', 'static', 'css'));
let cssChunk = cssDir.filter((cssFile) => { return cssFile.match(/.*\.(css)/ig)});

reactChunks.chunk1 = jsChunks[0];
reactChunks.chunk2 = jsChunks[1];
reactChunks.css = cssChunk[0];