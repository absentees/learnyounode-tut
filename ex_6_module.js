function ReadDirectory(directoryName, fileNameExtension, callback){
  var fs = require('fs');
  var path = require('path');
  var filteredList = [];

  fs.readdir(directoryName, function (err,data){
   if(err) return callback(err);

   for(var i=0;i<data.length;i++){
     if(path.extname(data[i]) == '.' + fileNameExtension){
       filteredList.push(data[i]);
     }
   }
   callback(null,filteredList)
  })
}

module.exports = ReadDirectory;
