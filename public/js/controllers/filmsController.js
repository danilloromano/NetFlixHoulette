angular.module('NetFlixApp').controller('FilmsController',function($scope,$http,$routeParams,$route) {

  $scope.films = {};
  $scope.inputSearch = '';
  $scope.options = '';

  $scope.search = function() {
    let inputSearch = $scope.inputSearch;
    inputSearch.replace(" ","%20");
    const BaseUrl = "http://netflixroulette.net/api/api.php?"+ $scope.options + inputSearch;
    console.log(BaseUrl);

    var promise = $http.get(BaseUrl);
        promise.then(function(result){
          $scope.films = result.data;
        }).catch(function(error){
            console.log(error);
          })
  }
});
