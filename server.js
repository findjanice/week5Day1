//dependencies
//serve static files
var express = require('express'); //
var bodyParser = require('body-parser');

var app = express();
var port = 8080; //add port

app.listen(port, function() {
  console.log('I\m watching you..', port);
});
