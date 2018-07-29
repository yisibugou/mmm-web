var myApp=angular.module('app', []);
myApp.controller('test', function($scope, $http){
	if(localStorage.user != null) {
		$scope.user = JSON.parse(localStorage.user);
		$scope.isLogin = true;
	} else {
		$scope.isLogin = false;
	}
	$scope.userInfos = [{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	},{
		'userName': '周毅',
		'introduction':'阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事.......',
		'description': '已完成99单，好评率99%',
	}];
	$scope.tasks = [{
		'title' : '图书馆管理系统',
		'reward' : '100',
		'period' : '2',
		'deadline': '2018-07-24 18:18:18',
		'demandUser' : '卢宝嘉'
	},{
		'title' : '图书馆管理系统',
		'reward' : '100',
		'period' : '2',
		'deadline': '2018-07-24 18:18:18',
		'demandUser' : '卢宝嘉'
	},{
		'title' : '图书馆管理系统',
		'reward' : '100',
		'period' : '2',
		'deadline': '2018-07-24 18:18:18',
		'demandUser' : '卢宝嘉'
	},{
		'title' : '图书馆管理系统',
		'reward' : '100',
		'period' : '2',
		'deadline': '2018-07-24 18:18:18',
		'demandUser' : '卢宝嘉'
	},{
		'title' : '图书馆管理系统',
		'reward' : '100',
		'period' : '2',
		'deadline': '2018-07-24 18:18:18',
		'demandUser' : '卢宝嘉'
	},{
		'title' : '图书馆管理系统',
		'reward' : '100',
		'period' : '2',
		'deadline': '2018-07-24 18:18:18',
		'demandUser' : '卢宝嘉'
	}];
	$scope.login = function() {
		$http({
			method: 'POST',
			data: {
				account: $scope.username,
				password: $scope.password
			},
			url: 'http://localhost:8080/user/login'
		}).then(function successCallback(response) {
				var userStr = JSON.stringify(response.data.user);
				localStorage.user = userStr;
				window.location.href="http://localhost/mmm-web/html/home.html";
			}, function errorCallback(response) {
				alert("请求失败");
		});
	};
	$scope.logout = function() {
		localStorage.clear(); 
		window.location.href="http://localhost/mmm-web/html/home.html";
	};
});


myApp.directive("loginTmpl", function() {
    return {
        templateUrl : "http://localhost/mmm-web/tmpl/login.html?v=1",
		restrict : "E"
    };
});

myApp.directive("registerTmpl", function() {
    return {
        templateUrl : "http://localhost/mmm-web/tmpl/register.html",
		restrict : "E"
    };
});

