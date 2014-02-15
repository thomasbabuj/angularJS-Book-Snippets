// script.js

//create the module and name it as SPApp
	// also include ngRoute for all our routing needs
var singlePageApp = angular.module('SPApp', ['ngRoute']);

// configure our routes
singlePageApp.config(function($routeProvider){
	$routeProvider

		//route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

//create the controller and inject angular's $scope
singlePageApp.controller('mainController', function($scope){

	// create a message to display in our view
	$scope.message = 'Everyone come and see how goog I look!';

});

singlePageApp.controller('aboutController', function($scope){
	$scope.message = 'Look! I am an about page.';
});

singlePageApp.controller('contactController', function($scope){
	$scope.message = 'Contact Us! Tom. This is just a demo.';
});