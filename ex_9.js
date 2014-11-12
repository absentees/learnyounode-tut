var http = require('http');
var bl = require('bl')


var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var allData = [];

http.get(url1, callback1);
http.get(url2, callback2);
http.get(url3, callback3);

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

function callback2(response){

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

function callback3(response){

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
