'use strict';
angular.module('swiperCard', [])
	.directive('swiperCard', function(){
	return {
		restrict: 'E',
		scope: {
			title: '=',
			link: '='
		},
		// replace:true, //it will replace html5 element, swiper-card, to a div
		templateUrl: 'views/swiper/swiperCard.html',
		// controller: function($scope) {
			// console.log('Directive Controller');
			// console.log($scope.title);
		// }
	};	
	});