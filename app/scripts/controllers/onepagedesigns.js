'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:OnepagedesignsCtrl
 * @description
 * # OnepagedesignsCtrl
 * Controller of the dinpApp
 */
angular.module('dinpApp')
  .controller('OnepagedesignsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/onePage.json').success(function(theapi) {
    $scope.myapi = theapi.results;
  });

  });
