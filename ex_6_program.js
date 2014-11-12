var myModule = require('./ex_6_module.js');

var filePath = process.argv[2];
var fileExt = process.argv[3];

myModule(filePath, fileExt, PrintArray);

function PrintArray(err, data){
  if(err) console.log(err);

  for(var i=0;i<data.length;i++)
      console.log(data[i]);
}
