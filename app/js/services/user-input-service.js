'use strict';

module.exports = function(app) {
  app.factory('userInputService', function() {
    var savedData = '';
    function set(data) {
      savedData = data;
    }
    function get() {
      return savedData;
    }

    return {
      set: set,
      get: get
    };
  });
};
