'use strict';

require('../app/js/app.js'); //using browserify, so we can pull things in with require

describe('test is run', function() {
  it('should run this test file', function() {
    expect('true').toBe('true');
  });
});
