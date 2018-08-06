var myApp=angular.module('app', []);
myApp.controller('taskMarket', function($scope, $http, $interval){
	$scope.test=[1,2,3,4,5,6,7];
});


myApp.directive("loginTmpl", function() {
    return {
        templateUrl : "http://localhost/mmm-web/tmpl/login.html?v=1",
		restrict : "E"
    };
});

myApp.directive("registerTmpl", function() {
    return {
        templateUrl : "http://localhost/mmm-web/tmpl/register.html?v=21",
		restrict : "E"
    };
});

