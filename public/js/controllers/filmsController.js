angular.module('NetFlixApp').controller('FilmsController',function($scope,$http,$routeParams,$route) {

  $scope.films = {};
  $scope.inputSearch = '';
  $scope.options = [
    {index:'actor=', name:'Actor'},
    {index:'director=', name:'Director'},
    {index:'title=', name:'Title'}
  ];
  $scope.selectedOption = $scope.options[0]
  $scope.message = "";

  $scope.search = function() {
    const BaseUrl = "http://netflixroulette.net/api/api.php?" + $scope.selectedOption.index + encodeURIComponent($scope.inputSearch);
    console.log(BaseUrl);
    
    var promise = $http.get(BaseUrl);
    promise.then(function(result){
      $scope.films = result.data;
      $scope.message = "";
    }).catch(function(error) {
      $scope.message = "Sorry could not find the movie";
      })
  }
});
