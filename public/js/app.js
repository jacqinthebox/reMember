var rap = angular.module('reMember-App', ['ngRoute']);

rap.config(function ($routeProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider.when('/',
    {
      templateUrl: 'partials/welcome.html',
    controller: 'WelcomeController'
    }).

  when('/admin',
    {
      templateUrl: 'partials/admin.html',
  controller: 'AdminController'
    }).

  when('/member',
    {
      templateUrl: 'partials/member.html',
  controller: 'MemberController'
    }).


  when('/signup',
      {
        templateUrl: 'partials/signup.html',
  controller: 'LogonController'
      }).

  otherwise( { redirectTo: '/'})

});

rap.controller('NavController', function ($scope,$http) {
  $scope.title = "MEAN Member Application";

  $http.get('http://localhost:3000/login').success(function(data) { $scope.member = data; });


});


rap.controller('WelcomeController', function ($scope,$http) {
  $scope.clubname = "Knitting Association";
  $http.get('http://localhost:3000/login').success(function(data) { $scope.member = data; });

});

rap.controller('AdminController', function ($scope,$http) {
  // $http.get('http://localhost:3000/members').success(function(data) { $scope.members = data; });
});

rap.controller('MemberController', function ($scope,$http) {


});

rap.controller('LogonController', function ($scope,$http) {


})
