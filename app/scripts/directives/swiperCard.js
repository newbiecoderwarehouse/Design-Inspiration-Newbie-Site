angular.module('swiperCard', [])
	.directive('swiperCard', function(){
	return {
		restrict: 'E',
		scope: {
			title: "="
		},
		controller: function($scope) {
			// console.log('Directive Controller');
			// console.log($scope.title);
		}
	};	
	});