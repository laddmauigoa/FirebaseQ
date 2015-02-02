var app = angular.module('firebaseQ');

app.controller('mainCtrl', function($scope, $firebase) {
	var ref = new Firebase("https://laddsfireQ.firebaseio.com/");
	var sync = $firebase(ref);

	$scope.messages = sync.$asArray();
	
	$scope.addMessage = function(text) {
		$scope.messages.$add({text: text, status: 'red'})
		$scope.newMessageText = '';
		

	}

	$scope.changeStatusToYellow = function(message) {
		// console.log(message)
		message.status = 'yellow';
		console.log($scope.messages)
		$scope.messages.$save();	
		
	}


})