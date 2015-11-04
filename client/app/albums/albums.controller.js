'use strict';

angular.module('krishnatvApp')
  .controller('AlbumsCtrl', function ($scope, $http, socket) {
    $scope.albums = [];

    $http.get('/api/albums').success(function(albums) {
      $scope.albums = albums;
      /*socket.syncUpdates('thing', $scope.awesomeThings);*/
    });

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
