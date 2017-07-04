angular.module('NetFlixApp').controller('NetFlixController',function($scope,$http,$routeParams,$route) {

  $scope.user = {};
  $scope.errorMessageEmail = "";
  $scope.errorMessagePassword = "";


  $scope.validateEmail = function(email) {
    if (!email) {
      $scope.errorMessageEmail = "The field can not be empty";
      return false;
    }
    $scope.errorMessageEmail = "";
    return email;
  }

  $scope.validatePassword = function(password) {
    if (!password) {
      $scope.errorMessagePassword = "The field can not be empty";
      return false;
    }
    $scope.errorMessagePassword = "";
    return password;
  }

  $scope.addUser = function() {
    if ($scope.validateEmail($scope.user.email)=== false || $scope.validatePassword($scope.user.password) === false) {
      return;
    }
    localStorage.setItem('Email',$scope.user.email);
    localStorage.setItem('Password',$scope.user.password);
  }

});
