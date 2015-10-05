'use strict';

describe('Unit: Constants', function() {

  var constants;

  beforeEach(module('app'));
  beforeEach(inject(function (AppSettings, _$httpBackend_) {

    constants = AppSettings;
  }));

  it('should exist', function() {
    expect(constants).toBeDefined();
  });

  it('should have an application name', function() {
    expect(constants.appTitle).toEqual('Example Application');
  });
});