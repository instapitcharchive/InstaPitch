//using browserify, so we can pull things in with require
require('../../app/js/app.js');
require('angular-mocks');

describe('AdminController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope;

  beforeEach(angular.mock.module('pitchApp'));

  beforeEach(angular.mock.inject(function($controller, $rootScope, $http, $cookies, $base64, $location, auth) {
    scope = $rootScope.$new();
    scope.skill = {skillBody: "testBody", skillType: {type: "testType"}};
    $controllerConstructor = $controller;

    //create a user, save it, include with every request
    //createNewUser();
    //process env mongo url
    //set it to a localhost test
    //

  }));

  it('should able to create a new controller', function() {
    var adminController = $controllerConstructor('adminController', {$scope: scope });
    expect(typeof adminController).toBe('object');
  });

  describe('rest requests', function() {
    var ctrl;
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/v_0_0_1/skills').respond(200, [{'skillBody': 'test skill'}]);
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request', function() {
      ctrl = $controllerConstructor('adminController', {$scope: scope});

      $httpBackend.flush();

      expect(Array.isArray(scope.skills)).toBeTruthy();
      expect(scope.skills[0].skillBody).toEqual('test skill');
    });

    it('should be able to create a new skill', function() {
      $httpBackend.expectPOST('/api/v_0_0_1/skills').respond(200, {'skillBody': 'test skill'});
      ctrl = $controllerConstructor('adminController', {$scope: scope});
      scope.newSkill = {skillBody: "testBody", skillType: {type: "testType"}};
      scope.saveNewSkill();

      $httpBackend.flush();
    });

    it('should be able edit a skill', function() {
      $httpBackend.expectPUT('/api/v_0_0_1/skills/1').respond(202, {});
      $httpBackend.expectGET('/api/v_0_0_1/skills').respond(200, [{}]);
      ctrl = $controllerConstructor('adminController', {$scope: scope});
      scope.saveSkill({_id: '1', skillBody: "testBody", skillType: {type: "testType"}});

      $httpBackend.flush();
    });

    it('should be able to delete a skill', function() {
      $httpBackend.expectDELETE('/api/v_0_0_1/skills/1').respond(200, {});
      $httpBackend.expectGET('/api/v_0_0_1/skills').respond(200, [{}]);
      ctrl = $controllerConstructor('adminController', {$scope: scope});
      scope.deleteSkill({_id: '1'});

      $httpBackend.flush();
    });
  });
});
