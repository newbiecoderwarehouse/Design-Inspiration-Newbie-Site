'use strict';

describe('Controller: PhotogallerychallengeCtrl', function () {

  // load the controller's module
  beforeEach(module('dinpApp'));

  var PhotogallerychallengeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotogallerychallengeCtrl = $controller('PhotogallerychallengeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
