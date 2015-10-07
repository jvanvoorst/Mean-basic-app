var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

	$scope.trustHtml = $sce.trustAsResourceUrl;


	$http.get("/videos")
	.success(function(response) {
		$scope.videos = response;
	});

}]);