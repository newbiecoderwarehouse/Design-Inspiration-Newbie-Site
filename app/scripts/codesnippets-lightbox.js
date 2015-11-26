/**
 * @namespace codesnippetsLightbox
 */
angular.module('codeSnippetsLightbox', [])
  .controller('CustomsnippetsCtrl', function ($scope, Lightbox) {
    $scope.images = [
    {
      'url': 'http://rxsharp.github.io/my-snapfile/images/filler-image.svg',
      'caption': 'This is the first image form the custom controller',
      'thumbUrl': 'https://pbs.twimg.com/profile_images/3786155988/46ea2dd8b1bdd31a8ba61044cb5b6ebe_normal.png' // used only for this example
    },
    {
      'url': 'http://rxsharp.github.io/my-snapfile/images/filler-image.svg',
      'caption': 'This is the second image',
      'thumbUrl': 'https://pbs.twimg.com/profile_images/3786155988/46ea2dd8b1bdd31a8ba61044cb5b6ebe_normal.png'
    },
    {
      'url': 'http://rxsharp.github.io/my-snapfile/images/filler-image.svg',
      'caption': 'This is the third image',
      'thumbUrl': 'https://pbs.twimg.com/profile_images/3786155988/46ea2dd8b1bdd31a8ba61044cb5b6ebe_normal.png'
    }
  ];

    $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };

  });

angular.module('codeSnippetsLightbox').config(function (LightboxProvider) {
  // set a custom template
  LightboxProvider.templateUrl = 'views/customLightbox.html';
});


