'use strict';

describe('ExampleService', function() {

  var service;
  var $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function (ApiService, _$httpBackend_) {

    service = ApiService;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('should get', function() {
    var successSpy = jasmine.createSpy('success'),
        failureSpy = jasmine.createSpy('failure');

    service.get().then(successSpy, failureSpy);

    var data = {};
    $httpBackend.expect('GET', 'api/catalog').respond(200, data);
    $httpBackend.flush();
    expect(successSpy).toHaveBeenCalled();
    expect(failureSpy).not.toHaveBeenCalled();
  });

  it('should fail get', function() {
    var successSpy = jasmine.createSpy('success'),
        failureSpy = jasmine.createSpy('failure');

    service.get().then(successSpy, failureSpy);

    var data = {};
    $httpBackend.expect('GET', 'api/catalog').respond(500, data);
    $httpBackend.flush();
    expect(failureSpy).toHaveBeenCalled();
    expect(successSpy).not.toHaveBeenCalled();
  });
});