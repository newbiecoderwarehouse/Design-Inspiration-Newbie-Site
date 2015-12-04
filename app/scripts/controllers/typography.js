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
    $http.get('http://newbiecoderwarehouse.github.io/design-inspiration-api/apis/typography.json').success(function(theapi, response) {
    $scope.myapi = theapi.results;
    console.log(response);
   	});
    $(window).load(function(){
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
    

    });



  });
