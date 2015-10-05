describe('Testing Example Directive', function () {
    var $scope, $compile;
    var element;

    beforeEach(module('app'));
    beforeEach(inject(function ($rootScope, _$compile_) {

        $scope = $rootScope.$new();
        $compile = _$compile_;

        element = $compile('<div example-directive></div>')($scope);

        $scope.$digest()
    }));

    describe('when page compiles the example directive and click on the element', function () {
        it('it should log to console', function () {
            console.log = jasmine.createSpy("log");
            element.triggerHandler('click');
            expect(console.log).toHaveBeenCalledWith("element clicked");
        });
    });
});