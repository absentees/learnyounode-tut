var http = require('http');
var bl = require('bl')
var async = require('async')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var allData = [];

http.get(url1, callback1);


function callback1(response){

  response.pipe(bl(function (err, data) {
    data.toString();
    allData.push(data);
  }))

  response.on('end', function(){
    if(allData.length = 2)
      PrintOut();
  })

  response.on('error', console.error);
}


function PrintOut(){
  for(var i = 0; i <= 2; i++){
        console.log(allData[i]);
  }
}
