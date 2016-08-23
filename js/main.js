/**
 * Created by pryrnjn on 8/23/16.
 */
var app = angular.module('myApp', []);
app.run(function ($rootScope) {
    $rootScope.authorName = "PriyaRanjan";
});

app.controller("ParentController", function ($scope, $http) {
    $scope.name = "Parent";
    $scope.showName = function () {
        alert($scope.name);
    };
    $scope.changeName = function () {
        $scope.name += " changed";
    };
});

app.controller("ChildController", function ($scope, $http) {
    $scope.name = "Child";
    $scope.showName = function () {
        alert($scope.name);
    };
    $scope.changeName = function () {
        $scope.name += " changed";
    };

});
