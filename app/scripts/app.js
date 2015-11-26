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
    'ngTouch',
    'bootstrapLightbox',
    'codeSnippetsLightbox'
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
      .when('/color/palettes', {
        templateUrl: 'views/colorpalettes.html',
        controller: 'ColorpalettesCtrl'
      })
      .when('/code/snippets', {
        templateUrl: 'views/codesnippets.html',
        controller: 'CodesnippetsCtrl'
      })
      .when('/ux/ui', {
        templateUrl: 'views/uxui.html',
        controller: 'UxuiCtrl'
      })
      .when('/hi/def/images', {
        templateUrl: 'views/hidefimages.html',
        controller: 'HidefimagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });



