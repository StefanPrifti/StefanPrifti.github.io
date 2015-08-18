// Code goes here

var app = angular.module('app', []);

app.controller('mainData', function($scope, $http, $filter) {
    $http.get("http://porosit-pica.herokuapp.com/api/getorderedpizzas")
    .success(function (response) {
    	$scope.pizzaList = response;
		$scope.selectedPizza = $filter('filter')($scope.pizzaList, function (p) {return p._id == $scope.selectedPizza;})[0];
    });

    $scope.listID = 0;
    $scope.selectedPizza = null;
    $scope.isSelected = false;

    $scope.setListID = function(id) {
		$scope.listID = id;
	}

	$scope.selectPizza = function(pizzaID) {
		$scope.selectedPizza = pizzaID;
		$scope.isSelected = true;
		$scope.selectedPizza = $filter('filter')($scope.pizzaList, function (p) {return p._id == $scope.selectedPizza;})[0];
	}

	console.log($scope.selectedPizza);
});