'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:HidefimagesCtrl
 * @description
 * # HidefimagesCtrl
 * Controller of the dinpApp
 */
angular.module('dinpApp')
  .controller('HidefimagesCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/hiDefImages.json').success(function(theapi) {
      $scope.myapi = theapi.results;
    });

  });
