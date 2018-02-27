describe('AngularJS Blog Application', function () {

    beforeEach(module('blogApp'));

    describe('BlogCtrl', function () {
        var scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {

            scope = $rootScope.$new();
            ctrl = $controller('BlogCtrl', {$scope: scope});
        }));

        it('should create show blog entry count', function () {
            console.log("blogList:" + scope.blogList.length);
            //expect(2).toEqual(2);
        });
    });

});