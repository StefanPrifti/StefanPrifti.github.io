var GjejFjalen = function($scope) {

  $scope.nrMundesive = 8;

  var zgjidhNjeFjale = function() {
    var i = Math.floor(Math.random() * fjalori.length);
    return fjalori[i];
  };

  var listoShkronjat = function(fjala) {
    return _.map(fjala.split(''), function(shkronja) {
      return { vlera: shkronja, zgjedhur: false };
    });
  };

  var shfaqFjalenSekrete = function() {
    _.each($scope.fjalaSekrete, function(shkronja) {
      shkronja.zgjedhur = true;
    });
  };

  var kontrolloFundin = function() {
    $scope.fitore = _.reduce($scope.fjalaSekrete, function(acc, shkronja) {
      return acc && shkronja.zgjedhur;
    }, true);

    if (!$scope.fitore && $scope.nrShkronjaveGabim === $scope.nrMundesive) {
      $scope.humbje = true;
      shfaqFjalenSekrete();
    }
  }

  $scope.rifillo = function() {
    _.each($scope.alfabeti, function(shkronja) {
      shkronja.zgjedhur = false;
    });
    $scope.fjalaSekrete = listoShkronjat(zgjidhNjeFjale());
    $scope.nrShkronjaveGabim = 0;
    $scope.fitore = false;
    $scope.humbje = false;
  };

  $scope.rifillo();

  $scope.provo = function(shkronjaShtypur) {
    shkronjaShtypur.zgjedhur = true;
    var uGjend = false;
    _.each($scope.fjalaSekrete,
           function(shkronja) {
             if (shkronjaShtypur.vlera.toUpperCase() === shkronja.vlera.toUpperCase()) {
               shkronja.zgjedhur = true;
               uGjend = true;
             }
           });
    if (!uGjend) {
      $scope.nrShkronjaveGabim++;
    }
    kontrolloFundin();
  };

  $scope.alfabeti = listoShkronjat("abcçdeëfghijklmnopqrstuvxyz");
};

var fjalori = ['provim', 'Universiteti', 'Politeknik', 'kopje', 'sezon', 'teza', 'vjeshtë', 'master', 'stilolaps', 'katër', 'teori', "inxhinieri", "fti", "upt"];
