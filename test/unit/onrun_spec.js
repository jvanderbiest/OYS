'use strict';

describe('on run', function() {

    var scope;

    beforeEach(module('app'));
    beforeEach(inject(function ($rootScope, _$compile_) {
        scope = $rootScope.$new();
        scope.$digest()
    }));

    it('should change state when broadcasting', function() {
        scope.$broadcast('$stateChangeStart');
        // todo assert
    });
});