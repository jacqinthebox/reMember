var rap = angular.module('reMember-App', ['ngRoute', 'ngResource']);

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


rap.factory('MemberFactory', function ($resource) {
  return $resource('http://localhost:3000/member/:id', { id: '@Id' },
    { update: { method: 'PUT' } }
  );
});

rap.controller('NavController', function ($scope,$http) {
  $scope.title = "MEAN Member Application";

  $http.get('http://localhost:3000/login').success(function(data) { $scope.member = data; });


});


rap.controller('WelcomeController', function ($scope,$http,$location) {
  $scope.clubname = "Knitting Association";
  $http.get('http://localhost:3000/login').success(function(data) { $scope.member = data; });

    //check logon:
    $scope.formdata = {}
    $scope.logon = function(formdata) {

      $http({
        method: 'POST', 
        url: 'http://localhost:3000/login', 
        data: formdata
      })
      .success(function(data,status, headers, config) {

        $scope.member = data;
        $location.path('/member');
        if(!$scope.$$phase) {
          $scope.$apply();
        }

      })
      .error(function(data, status, headers, config) {
        console.log('niet goed dus');
      });
    }
});



rap.controller('AdminController', function ($scope,$http) {
  //TODO 
  //$http.get('http://localhost:3000/members').success(function(data) { $scope.members = data; });

});

rap.controller('MemberController', function ($scope,$http,MemberFactory) {

  //you only need to check the login. The API uses passport.js, sessions are handled there.
  $http({
    method: 'GET',
    url: 'http://localhost:3000/login'
  }).
  success(function(data){
    //user is logged in
    $scope.member = data; 
  })
  .error(function(data,status,headers,config) {
    //TODO handle error
  });
});
