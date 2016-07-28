'use strict';

describe('Service: shots', function () {

  // load the service's module
  beforeEach(module('zazcarApp'));

  // instantiate service
  var shots;
  beforeEach(inject(function (_shots_) {
    shots = _shots_;
  }));

  it('should do something', function () {
    expect(!!shots).toBe(true);
  });

});
