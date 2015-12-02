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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/uxUi.json').success(function(theapi) {
    $scope.myapi = theapi.results;
   });


    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        keyboardControl: true
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

     var swipers = $(".angular-slide").length;
    alert("Num of swiper slides: " + swipers);
  });
