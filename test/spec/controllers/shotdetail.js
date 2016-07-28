'use strict';

describe('Controller: ShotdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('zazcarApp'));

  var ShotdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShotdetailCtrl = $controller('ShotdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShotdetailCtrl.awesomeThings.length).toBe(3);
  });
});
