var hangmanController = function($scope) {
  
  $scope.missesAllowed = 6;
  
  var getRandomWord = function() {
    var index = Math.floor(Math.random() * words.length);
    return words[index];
  };
  
  var makeLetters = function(word) {
    return _.map(word.split(''), function(character) {
      return { name: character, chosen: false };
    });
  };
  
  var revealSecret = function() {
    _.each($scope.secretWord, function(letter) {
      letter.chosen = true;
    });
  };
  
  var checkForEndOfGame = function() {
    $scope.win = _.reduce($scope.secretWord, function(acc, letter) {
      return acc && letter.chosen;
    }, true);
    
    if (!$scope.win && $scope.numMisses === $scope.missesAllowed) {
      $scope.lost = true;
      revealSecret();
    }
  }
  
  $scope.reset = function() {
    _.each($scope.letters, function(letter) {
      letter.chosen = false;
    });
    $scope.secretWord = makeLetters(getRandomWord());
    $scope.numMisses = 0;
    $scope.win = false;
    $scope.lost = false;
  };
  
  $scope.reset();
  
  $scope.try = function(guess) {
    guess.chosen = true;
    var found = false;
    _.each($scope.secretWord,
           function(letter) {
             if (guess.name.toUpperCase() === letter.name.toUpperCase()) {
               letter.chosen = true;
               found = true;
             }
           });
    if (!found) {
      $scope.numMisses++;
    }
    checkForEndOfGame();
  };
  
  $scope.letters = makeLetters("abcçdeëfghijklmnopqrstuvxyz");
};

var words = ['provim', 'Universiteti', 'Politeknik', 'kopje', 'sezon', 'vjeshte', 'master', 'stilolaps', 'kater', 'teori', "inxhinieri"];