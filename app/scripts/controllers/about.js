'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dinpApp
 */
angular.module('dinpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
