var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (request, response) {
//	response.send('Hello World');
	fs.readFile('index.html', function(error, data){
		response.send(data.toString());
	});
})

var server = app.listen(8081, function () {
  console.log("DELight server running on localhost:8081...");
})
