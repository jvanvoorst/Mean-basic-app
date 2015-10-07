// Requires
var express = require('express');
var bodyParser = require('body-parser');

var videos = [];

// Create Express App Object
var app = express();

// Application Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
	console.log('string')
		console.log(videos.length)
	if (videos.length >= 2) {
		res.send("Sorry submitions limited to 8");
	} 
	else {
  		res.sendFile('/html/index.html', { root : './public' });
	}
});

app.get('/videos', function(req, res) {
	res.send(videos);
});

app.post('/formSubmit', function(req, res) {
	console.log('Name', req.body.name);
	videos.push(req.body);
	console.log(videos);
	console.log(videos.length)
	res.send('Submitted');
});

// Creating Server and Listening for Connections
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
