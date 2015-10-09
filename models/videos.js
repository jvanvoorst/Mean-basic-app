var videos = [];

var Video = function(videoData) {
	this.name = videoData.name;
	this.url = videoData.url;
	this.title = videoData.title;
	this.description = videoData.description;
	this.votes = 0
	videos.push(this);
};

var winner = function() {
	console.log('working');
	for (i = 0; i < videos.length; i += 2) {
		console.log(i)
		if (videos[i].votes < videos[i + 1].votes) {
			console.log('one');
			videos[i + 1].winner = true;
		}
		else if (videos[i].votes > videos[i + 1].votes) {
			console.log('two');
			videos[i].winner = true;
		}
	}
};

var nextround = function() {
	for (i = 0; i < videos.length; i++) {
		if (videos[i].winner !== true) {
			videos.splice(i, 1);
		}
	}
	for (i = 0; i < videos.length; i++) {
		videos[i].votes = 0;
		videos[i].winner = false;
	}
};

module.exports = {
	videos : videos,
	Video  : Video,
	winner : winner,
	nextround : nextround,
};
