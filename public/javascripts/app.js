var reMemberApp = angular.module('reMemberApp',[]);
 
reMemberApp.controller('WelcomeController', function ($scope,$http) {
     $scope.title = "The cat just made a strange noise";
     $scope.story = "We better check her out and see if she's ok."


     $http.get('http://localhost:3000/members').success(function(data) { $scope.members = data; });
});