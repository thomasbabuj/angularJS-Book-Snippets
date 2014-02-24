'use strict';

var myModule = angular.module('angularDemoYeomanApp', [
  				'ngResource'
				]);

myModule.config(function ($routeProvider) {

	$routeProvider 
	.when('/', {
		templateUrl : 'views/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
});


