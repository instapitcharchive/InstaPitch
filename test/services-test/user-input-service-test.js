'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('User Input service', function() {
  beforeEach(angular.mock.module('pitchApp'));

  it('should have a working save data service', inject(function(userInputService){
    expect(userInputService).toBeDefined();
  }));

  it('should set and get saved data', inject(function(userInputService){
    expect(userInputService.set("username", "humanName"));
    expect(userInputService.get("username")).toBe("humanName");
  }));
});
