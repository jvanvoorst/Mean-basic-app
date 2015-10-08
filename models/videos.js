var videos = [];

var Video = function(videoData) {
	this.name = videoData.name;
	this.url = videoData.url;
	this.title = videoData.title;
	this.description = videoData.description;
	this.votes = 0
	videos.push(this);
};

module.exports = {
	videos : videos,
	Video : Video,
};
