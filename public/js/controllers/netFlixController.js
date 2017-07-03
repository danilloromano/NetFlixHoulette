angular.module('NetFlixApp').controller('NetFlixController',function($scope,$http,$routeParams,$route) {

  $scope.user = {};

  $scope.addUser = function(user) {
    console.log(user);
    localStorage.setItem('User','{user.email,user.password}');
  }

});
