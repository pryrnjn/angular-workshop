/**
 * Created by pryrnjn on 8/23/16.
 */
var app = angular.module('myApp', []);
app.run(function ($rootScope) {
    $rootScope.authorName = "PriyaRanjan";
});

app.controller("ParentController", function ($scope) {
    $scope.name = "Parent";
    $scope.showName = function () {
        alert($scope.name);
    };
    $scope.changeName = function () {
        $scope.name += " changed";
    };
});

app.controller("ChildController", function ($scope) {
    $scope.name = "Child";
    $scope.showName = function () {
        alert($scope.name);
    };
    $scope.changeName = function () {
        $scope.name += " changed";
    };

});

app.controller("MyController", function ($scope, $http) {
    $scope.userId;
    $scope.fetchData = function () {
        $http.get("https://api.github.com/users/pryrnjn")
            .then(function(response){
                console.log(JSON.stringify(response));
                $scope.userId = response.data.id;
            });
    };
    $scope.fetchData();

});
