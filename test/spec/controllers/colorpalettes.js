'use strict';

describe('Controller: ColorpalettesCtrl', function () {

  // load the controller's module
  beforeEach(module('dinpApp'));

  var ColorpalettesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorpalettesCtrl = $controller('ColorpalettesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
