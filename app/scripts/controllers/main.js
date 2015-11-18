'use strict';

/**
 * @ngdoc function
 * @name dinpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dinpApp
 */
angular.module('dinpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
