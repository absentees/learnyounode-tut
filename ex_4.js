var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
  if (err) throw err;

  var newLineCount = data.toString().split('\n');
  console.log(newLineCount.length-1);

});
