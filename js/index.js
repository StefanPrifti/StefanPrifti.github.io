var GjejFjalen = function($global) {

  $global.nrMundesive = 8;

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
    _.each($global.fjalaSekrete, function(shkronja) {
      shkronja.zgjedhur = true;
    });
  };

  var kontrolloFundin = function() {
    $global.fitore = _.reduce($global.fjalaSekrete, function(acc, shkronja) {
      return acc && shkronja.zgjedhur;
    }, true);

    if (!$global.fitore && $global.nrShkronjaveGabim === $global.nrMundesive) {
      $global.humbje = true;
      shfaqFjalenSekrete();
    }
  }

  $global.rifillo = function() {
    _.each($global.alfabeti, function(shkronja) {
      shkronja.zgjedhur = false;
    });
    $global.fjalaSekrete = listoShkronjat(zgjidhNjeFjale());
    $global.nrShkronjaveGabim = 0;
    $global.fitore = false;
    $global.humbje = false;
  };

  $global.rifillo();

  $global.provo = function(shkronjaShtypur) {
    shkronjaShtypur.zgjedhur = true;
    var uGjend = false;
    _.each($global.fjalaSekrete,
           function(shkronja) {
             if (shkronjaShtypur.vlera.toUpperCase() === shkronja.vlera.toUpperCase()) {
               shkronja.zgjedhur = true;
               uGjend = true;
             }
           });
    if (!uGjend) {
      $global.nrShkronjaveGabim++;
    }
    kontrolloFundin();
  };

  $global.alfabeti = listoShkronjat("abcçdeëfghijklmnopqrstuvxyz");
};

var fjalori = ['provim', 'Universiteti', 'Politeknik', 'kopje', 'sezon', 'teza', 'vjeshtë', 'master', 'stilolaps', 'katër', 'teori', "inxhinieri", "fti", "upt"];
