var app = angular.module('myApp', []);
app.controller('newsController', function($scope, $http){	
	$http({method: 'POST', url: 'harga_hosting.json'}).success(function(data)
	{
		$scope.harga = data; // response data 
	});
	
 });