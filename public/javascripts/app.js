var reMemberApp = angular.module('reMemberApp',[]);
 
reMemberApp.controller('WelcomeController', function ($scope) {
     $scope.title = "The cat just made a strange noise";
     $scope.story = "We better check her out and see if she's ok."
});
