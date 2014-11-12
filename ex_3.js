var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var newLineCount = buffer.toString().split('\n');

console.log(newLineCount.length-1);
