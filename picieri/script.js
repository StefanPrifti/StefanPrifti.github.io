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
	    });

	    pizzaDetails();

	    angular.forEach($scope.pizzaList, function(pizza) {
	    	if( pizza.pizza_user_template._id ==  $scope.selectedPizza) {
	    		$scope.selectedPizzaDetails = pizza;
	    	}
		});



	}

	function pizzaDetails() {
		angular.forEach($scope.selectedPizza.ingredients, function(i) {
	    	$scope.price += (i.quantity * i.ingredient.price);
	    	console.log($scope.price);
		});
	}

	
});