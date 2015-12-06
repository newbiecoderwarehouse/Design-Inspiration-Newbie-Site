'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:ColorpalettesCtrl
 * @description
 * # ColorpalettesCtrl
 * Controller of the dinpApp
 */
 angular.module('dinpApp')
 .controller('ColorpalettesCtrl', function ($scope, $http) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/colorPalettes.json').success(function(theapi) {
    $scope.myapi = theapi.results;
  });

});
