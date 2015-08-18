// Code goes here

var app = angular.module('app', []);

app.controller('mainData', function($scope, $http, $filter) {
    $http.get("http://porosit-pica.herokuapp.com/api/getorderedpizzas")
    .success(function (response) {
    	$scope.pizzaList = response;
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
		$http.get("http://porosit-pica.herokuapp.com/api/getPizzaDetails/" + pizzaID)
	    .success(function (response) {
	    	$scope.selectedPizza = response[0];
	    $scope.selectedPizzaDetails = $filter('filter')($scope.pizzaList, { _id: $scope.selectedPizza  }, true)[0];
	    
	    });

	}

	
});