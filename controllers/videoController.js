var videoModel = require('../models/videos.js');

module.exports = {
	addvideo : function(req, res) {
		var vid = new videoModel.Video(req.body);
		res.send(videoModel.videos);
	},
	getvideos : function(req, res) {
		res.send(videoModel.videos);
	},
	vote : function(req, res) {
		videoModel.videos[req.body.indexnum].votes++;
		res.send(videoModel.videos);
	},
	winner : function(req, res) {
		videoModel.winner();
		res.send(videoModel.videos);
	},
	nextround : function(req, res) {
		videoModel.nextround();
		res.send(videoModel.videos)
	},
};