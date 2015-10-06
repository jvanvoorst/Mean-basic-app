// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var videos = [];

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.send('Hello')
});
app.post('/formSubmit', function(req, res) {
	console.log('Name', req.body.name);
	videos.push(req.body);
	console.log(videos);
	res.send('Submitted');
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})