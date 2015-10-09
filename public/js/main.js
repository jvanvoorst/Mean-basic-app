var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

	$scope.trustResource = $sce.trustAsResourceUrl;

	$http.get("/getvideos")
		.then(function(response) {
			$scope.videos = response.data;
		});

	$scope.submitVideo = function() {
		$http.post('/addvideo', $scope.newVideo)
			.then(function(response) {
				$scope.videos = response.data;
			});
		if ($scope.videos.length >= 7) {
			$scope.videosFull = true;
		}
	};

	$scope.vote = function(index) {
		$scope.send = { indexnum : index};
		$http.post('/vote', $scope.send)
			.then(function(response) {
				$scope.videos = response.data;
			});
	};

	$scope.winner = function() {
		$http.get('/winner')
			.then(function(response) {
				$scope.videos = response.data;
			});
		$scope.hideVote = true;
	};

	$scope.nextRound = function() {
		$http.get('/nextround')
			.then(function(response) {
				$scope.videos = response.data;
			});
		$scope.hideVote = false;
	}

}]);