var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(filePath, function (err,data){
  if(err) throw err;

  for(var i=0;i<data.length;i++){
    if(path.extname(data[i]) == '.' + fileExt){
      console.log(data[i]);
    }
  }
})
