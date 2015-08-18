// Code goes here

var app = angular.module('app', []);

app.controller('mainData', function($scope, $http) {
    $http.get("http://porosit-pica.herokuapp.com/api/getorderedpizzas")
    .success(function (response) {$scope.pizzaList = response;});

    $('#mytab').tab('show');

      $scope.notebooks = [
    {"name": "Lenovo",
     "procesor": "Intel i5",
     "age": 2011},
    {"name": "Toshiba",
     "procesor": "Intel i7",
     "age": 2010},
    {"name": "Toshiba",
     "procesor": "Intel core 2 duo",
     "age": 2008},
    {"name": "HP",
     "procesor": "Intel core 2 duo",
     "age": 2012},
    {"name": "Acer",
     "procesor": "AMD",
     "age": 2006},
    {"name": "Lenovo",
     "procesor": "Intel i5",
     "age": 2009},
    {"name": "Toshiba",
     "procesor": "Intel i7",
     "age": 2008},
    {"name": "Lenovo",
     "procesor": "Intel i5",
     "age": 2011},
    {"name": "Toshiba",
     "procesor": "Intel i7",
     "age": 2010},
    {"name": "Toshiba",
     "procesor": "Intel core 2 duo",
     "age": 2008},
    {"name": "HP",
     "procesor": "Intel core 2 duo",
     "age": 2012},
    {"name": "Acer",
     "procesor": "AMD",
     "age": 2006},
    {"name": "Lenovo",
     "procesor": "Intel i5",
     "age": 2009},
    {"name": "Toshiba",
     "procesor": "Intel i7",
     "age": 2008},
    {"name": "Lenovo",
     "procesor": "Intel i5",
     "age": 2011},
    {"name": "Toshiba",
     "procesor": "Intel i7",
     "age": 2010},
    {"name": "Toshiba",
     "procesor": "Intel core 2 duo",
     "age": 2008},
    {"name": "HP",
     "procesor": "Intel core 2 duo",
     "age": 2012},
    {"name": "Acer",
     "procesor": "AMD",
     "age": 2006},
    {"name": "Lenovo",
     "procesor": "Intel i5",
     "age": 2009},
    {"name": "Toshiba",
     "procesor": "Intel i7",
     "age": 2008}
  ];
  $scope.orderList = "name";
});