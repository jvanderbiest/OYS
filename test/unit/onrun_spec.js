'use strict';

describe('on run', function() {

    var scope, $rootScope;

    beforeEach(module('app'));
    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
    }));

    it('should change page title when state changes successfully', function() {
        var eventData = { title: 'index' };
        $rootScope.$broadcast('$stateChangeSuccess', eventData);
        expect($rootScope.pageTitle).toBe('index \u2014 Example Application');
    });
});