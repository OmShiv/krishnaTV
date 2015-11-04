'use strict';

angular.module('krishnatvApp')
  .controller('AlbumCtrl', function ($scope, $http, $stateParams, socket) {
    $scope.album = {};

    $http.get('/api/albums/'+ $stateParams.albumId).success(function(album) {
      $scope.album = album;
      /*socket.syncUpdates('thing', $scope.awesomeThings);*/
    });

    $http({
          method: 'GET',
          url: '/api/songs/albumsongs/'+ $stateParams.albumId
          //params: { session_id: o.session_id }
          }).success(function(data) {
            // merge data into the queue
            $scope.albumtracks = data;
          })

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
