describe('NetFlixController', function() {
  beforeEach(module('NetFlixApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('functions of validation inputs', function() {
    it('should $scope.user is defined', function() {
      var $scope = {};
      var controller = $controller('NetFlixController', { $scope: $scope });
      expect($scope.user).toBeDefined();
    });
    it('should return email string if input is not empty', function() {
      var $scope = {};
      var controller = $controller('NetFlixController', { $scope: $scope });
      $scope.user.email = "danillo@ggg.com";
      $scope.validateEmail($scope.user.email );
      expect($scope.user.email ).toEqual("danillo@ggg.com");
      expect($scope.validateEmail($scope.user.email)).toEqual("danillo@ggg.com");
    });
    it('should not return email if input is empty', function() {
      var $scope = {};
      var controller = $controller('NetFlixController', { $scope: $scope });
      $scope.user.email = "";
      $scope.validateEmail($scope.user.email );
      expect($scope.user.email ).toEqual("");
      expect($scope.validateEmail($scope.user.email)).toEqual(false);
    });
    it('should return password string if input is not empty', function() {
      var $scope = {};
      var controller = $controller('NetFlixController', { $scope: $scope });
      $scope.user.password = "123de456";
      $scope.validatePassword($scope.user.password );
      expect($scope.user.password ).toEqual("123de456");
      expect($scope.validatePassword($scope.user.password)).toEqual("123de456");
    });
    it('should not return password if input is empty', function() {
      var $scope = {};
      var controller = $controller('NetFlixController', { $scope: $scope });
      $scope.user.password = "";
      $scope.validatePassword($scope.user.password );
      expect($scope.user.password ).toEqual("");
      expect($scope.validatePassword($scope.user.password)).toEqual(false);
    });
  });
});
