//**dependencies**
//serve static files
var express = require('express'); //
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 8080; //add port

//**middleware**
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors()); //sends headers

// app.use(bodyParser.urlencoded)({
//   extended: true
// })

//**end points**
var message = {
  "message": "Hello World"
};

app.get('/api/message', function(req, res) {
  return res.json(message);
});

app.post('/api/receive_message', function(req, res) {
  console.log(req.body);
  res.send();
});


app.listen(port, function() {
  console.log('I\m watching you..', port);
});
