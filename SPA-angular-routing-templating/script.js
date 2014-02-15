// script.js

//create the module and name it as SPApp
var singlePageApp = angular.module('SPApp', []);

//create the controller and inject angular's $scope
singlePageApp.controller('mainController', function($scope){

	// create a message to display in our view
	$scope.message = 'Everyone come and see how goog I look!';

});