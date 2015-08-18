// Code goes here

var app = angular.module('app', []);

app.controller('mainData', function($scope, $http) {
    $http.get("http://porosit-pica.herokuapp.com/api/getorderedpizzas")
    .success(function (response) {$scope.pizzaList = response;});

    $scope.listID = 0;

    $scope.setListID = function(id) {
		$scope.listID = id;
	}
});