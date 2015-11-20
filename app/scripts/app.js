'use strict';

/**
 * @ngdoc overview
 * @name dinpApp
 * @description
 * # dinpApp
 *
 * Main module of the application.
 */
angular
  .module('dinpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/one/page/designs', {
        templateUrl: 'views/onepagedesigns.html',
        controller: 'OnepagedesignsCtrl'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
