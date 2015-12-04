'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:TypographyCtrl
 * @description
 * # TypographyCtrl
 * Controller of the dinpApp
 */
angular.module('dinpApp')
  .controller('TypographyCtrl', function ($scope, $http) {
    $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/typography.json').success(function(theapi) {
    $scope.myapi = theapi.results;
    
   	});



  });
