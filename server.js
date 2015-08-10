//**dependencies**
//serve static files
var express = require('express'); //
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

// Twilio Credentials
var accountSid = '';
var authToken = '';

var client = require('twilio')(accountSid, authToken);

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

app.post('/api/send_text_message', function(req, res) {
  console.log(req.body.message);
  // request.post('https://' + accountSid + ':' + authToken +
  //   '@api.twilio.com/2010-04-01/Accounts')
  client.messages.create({
    to: "9095699519",
    from: "+19093452219",
    body: req.body.message,
  }, function(err, message) {
    console.log(message.sid);
  });
  res.send();
});


app.listen(port, function() {
  console.log('I\m watching you..', port);
});
