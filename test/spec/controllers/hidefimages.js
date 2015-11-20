'use strict';

describe('Controller: HidefimagesCtrl', function () {

  // load the controller's module
  beforeEach(module('dinpApp'));

  var HidefimagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HidefimagesCtrl = $controller('HidefimagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
