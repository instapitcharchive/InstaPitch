//using browserify, so we can pull things in with require
require('../app/js/app.js');
require('angular-mocks');

describe('test is run', function() {
  it('should run this test file', function() {
    expect('true').toBe('true');
  });
});
