'use strict'

const fs= require('fs');
const fileName = process.argv[2];
const fileContents = fs.readFileSync(fileName).toString();
const fileSplitOnNewline = fileContents.split('\n');

console.log(fileSplitOnNewline.length - 1);