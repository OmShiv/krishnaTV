'use strict';

angular.module('krishnatvApp')
  .controller('GenreCtrl', function ($scope, $http, $stateParams, socket) {
    $scope.genre = {};

    $http.get('/api/categories/'+ $stateParams.genreId).success(function(genre) {
      $scope.genre = genre;
      /*socket.syncUpdates('thing', $scope.awesomeThings);*/
    });

    //$http({
          //method: 'GET',
          //url: '/api/songs/genresongs/'+ $stateParams.genreId
          ////params: { session_id: o.session_id }
          //}).success(function(data) {
            //// merge data into the queue
            //$scope.genretracks = data;
          //})

    /*$scope.addThing = function() {*/
      /*if($scope.newThing === '') {*/
        /*return;*/
      /*}*/
      /*$http.post('/api/things', { name: $scope.newThing });*/
      /*$scope.newThing = '';*/
    /*};*/

    /*$scope.deleteThing = function(thing) {*/
      /*$http.delete('/api/things/' + thing._id);*/
    /*};*/

    /*$scope.$on('$destroy', function () {*/
      /*socket.unsyncUpdates('thing');*/
    /*});*/
  });
