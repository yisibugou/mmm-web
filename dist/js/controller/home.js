var myApp=angular.module('app', []);
myApp.controller('test', function($scope, $http, $interval){
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
	// 登录
	$scope.login = function() {
		$http({
			method: 'POST',
			data: {
				account: $scope.username,
				password: $scope.password
			},
			url: 'http://localhost:8080/mmm/user/login'
		}).then(function successCallback(response) {
				if(response.data.errCode == 0) {
					var userStr = JSON.stringify(response.data.user);
					localStorage.user = userStr;
					window.location.href="http://localhost/mmm-web/html/home.html";
				}
			}, function errorCallback(response) {
				alert("请求失败");
		});
	};
	// 注册
	$scope.register = function() {
		$scope.registerForm.email.$dirty = true;
		$scope.registerForm.code.$dirty = true;
		$scope.registerForm.password.$dirty = true;
		if(!$scope.registerForm.email.$error.email && !$scope.registerForm.email.$error.required && !$scope.isRegistered && 
			!$scope.registerForm.code.$error.required && !$scope.registerForm.code.$error.required) {
			$http({
				method: 'POST',
				data: {
					reqType: 0,
					email: $scope.email,
					password: $scope.password,
					code: $scope.code
				},
				url: 'http://localhost:8080/mmm/user/register'
				}).then(function successCallback(response) {
					if(response.data.errCode == 0) {
						alert("注册成功");
					} else {
						alert("注册失败");
					}
					window.location.href="http://localhost/mmm-web/html/home.html";
				}, function errorCallback(response) {
					alert("请求失败");
			});
		}
	};
	// 注册时，监控输入框改变事件，查看是否用户存在
	$scope.checkIsRegistered = function() {
		if(!$scope.registerForm.email.$error.email && !$scope.registerForm.email.$error.required) {
			$http({
				method: 'POST',
				data: {
					reqType: 0,
					email: $scope.email
				},
				url: 'http://localhost:8080/mmm/user/isRegistered'
				}).then(function successCallback(response) {
					if(response.data.errCode == 1)
						$scope.isRegistered = true;
					else
						$scope.isRegistered = false;
				}, function errorCallback(response) {
					alert("请求失败");
			});
		}
	};
	// 退出登录
	$scope.logout = function() {
		localStorage.clear(); 
		window.location.href="http://localhost/mmm-web/html/home.html";
	};
	
	// 密码是否可见
	$scope.changeVisible = function() {
		if($scope.pswType == "text") {
			$scope.pswType = "password";
			$scope.eyeClass = "glyphicon glyphicon-eye-close";
		}
		else {
			$scope.pswType = "text";
			$scope.eyeClass = "glyphicon glyphicon-eye-open";
		}
	};
	// 获取验证码
	$scope.sendCode = function() {
		$scope.registerForm.email.$dirty = true;
		if( !$scope.registerForm.email.$error.email && !$scope.registerForm.email.$error.required && !$scope.isRegistered && $scope.sendCodeTime == 0) {
			$scope.sendCodeTime = 60;
			$scope.sendCodeBtn = $scope.sendCodeTime + "s";
			$interval(function(){
				$scope.sendCodeTime--;
				$scope.sendCodeBtn = $scope.sendCodeTime + "s";
				if($scope.sendCodeTime == 0) {
					$scope.sendCodeBtn ="获取验证码";
				}
			}, 1000, 60);
			$http({
				method: 'POST',
				data: {
					email: $scope.email,
				},
				url: 'http://localhost:8080/mmm/user/sendEmailCode'
			}).then(function successCallback(response) {
				
				}, function errorCallback(response) {
					alert("请求失败");
			}); 
		}
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
        templateUrl : "http://localhost/mmm-web/tmpl/register.html?v=21",
		restrict : "E"
    };
});

