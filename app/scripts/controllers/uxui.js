
'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:UxuiCtrl
 * @description
 * # UxuiCtrl
 * Controller of the dinpApp
 */
angular.module('dinpApp')
  .controller('UxuiCtrl', function ($scope, $http) {

   $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/uxUi.json').success(function(theapi) {
    $scope.myapi = theapi.results;
   });

   });

