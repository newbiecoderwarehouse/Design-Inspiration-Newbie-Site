'use strict';

describe('Controller: OnepagedesignsCtrl', function () {

  // load the controller's module
  beforeEach(module('dinpApp'));

  var OnepagedesignsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnepagedesignsCtrl = $controller('OnepagedesignsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
