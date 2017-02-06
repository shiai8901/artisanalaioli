'use strict';

angular.module('myApp.addfriend', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addfriend', {
    templateUrl: 'add-friend/add-friend.template.html',
    controller: 'AddFriendCtrl'
  });
}])

.controller('AddFriendCtrl',  function($scope, Friends) {
    $scope.friends = []; 
    $scope.readyToSplit = false;

    $scope.addOne = function(friendname) {
    	Friends.addOne(friendname); 
    	$scope.getAll();
    	$scope.friendname = "";
        $scope.ready();
    }

    $scope.getAll = function() {   	
    	$scope.friends = Friends.getAll();
    }

    $scope.removeOne = function(friend) {
    	Friends.removeOne(friend);
    	$scope.getAll();
        $scope.ready();
    }

    $scope.ready = function() {
        if ($scope.friends.length > 0) {
            $scope.readyToSplit = true;
        } else {
            $scope.readyToSplit = false;
        }
    }
}
);