
var app = angular.module('app', ['ngMap', 'angularMoment']);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('mainData', function($scope, $http, $filter) {
    $http.get("http://porosit-pica.herokuapp.com/api/getorderedpizzas")
    .success(function (response) {
    	$scope.pizzaList = response;
    });

    $scope.listID = 0;
    $scope.selectedPizzaID = null;
    $scope.isSelected = false;
	$scope.pizzaDetails = {
		price : 0,
		diameter : 0,
		diameter_cm : 0,
		diameter_percent : 0,
		diameter_coeficient : 0
	};
	$scope.pizzaStatusArray = ["në pritje", "në gatim", "në pjekje", "në shpërndarje", "u dorëzua"];
	$scope.pizzaQuantityArray = ["fare", "pak", "normal", "ekstra", "dyfish"];

    $scope.setListID = function(id) {
		$scope.listID = id;
	}

	$scope.selectPizza = function(pizzaID) {
		$scope.selectedPizzaID = pizzaID;
		$scope.isSelected = true;
		$http.get("http://porosit-pica.herokuapp.com/api/getPizzaDetails/" + pizzaID)
	    .success(function (response) {
	    	$scope.selectedPizza = response[0];

	    	setDiameterStats($scope.selectedPizza.diameter);

	    	$scope.pizzaDetails.price = 0;
		    angular.forEach($scope.selectedPizza.ingredients, function(i, index) {
				$scope.pizzaDetails.price += (i.quantity * i.ingredient.price);

				if (index == $scope.selectedPizza.ingredients.length - 1)
					$scope.pizzaDetails.price *= $scope.pizzaDetails.diameter_coeficient;
			});


	    });

	    angular.forEach($scope.pizzaList, function(pizza) {
	    	if( pizza.pizza_user_template._id ==  $scope.selectedPizzaID) {
	    		$scope.selectedPizzaDetails = pizza;
				$scope.status = $scope.pizzaStatusArray[$scope.selectedPizzaDetails.pizza_status];
	    	}
		});
	}

	function setDiameterStats (diameterNum) {
		switch(diameterNum){
			case 0:
				$scope.pizzaDetails.diameter_cm = 20;
				$scope.pizzaDetails.diameter_percent = 33.3;
				$scope.pizzaDetails.diameter_coeficient = 1;
				break;
			case 1:
				$scope.pizzaDetails.diameter_cm = 30;
				$scope.pizzaDetails.diameter_percent = 50;
				$scope.pizzaDetails.diameter_coeficient = 1.2;
				break;
			case 2:
				$scope.pizzaDetails.diameter_cm = 40;
				$scope.pizzaDetails.diameter_percent = 66.6;
				$scope.pizzaDetails.diameter_coeficient = 1.5;
				break;
			case 3:
				$scope.pizzaDetails.diameter_cm = 60;
				$scope.pizzaDetails.diameter_percent = 100;
				$scope.pizzaDetails.diameter_coeficient = 1.8;
				break;
		}
	}

	$scope.logIn = function () {

		$http.post('http://porosit-pica.herokuapp.com/api/authenticatePizzaiolo', { email: $scope.username, password: $scope.password }).
		then(function(response) {
		    console.log(response);
		}, function(response) {
		    console.log("Ndodhi nje gabim" + response);
		});
	}
		// $scope

});