
'use strict';

angular.module('krishnatvApp')
  .controller('songListCtrl',['$scope', 'DashService', function ($scope, DashService) {
    $scope.songsInAlbum = [];
    $scope.currentAlbum = null;

    $scope.dashService = DashService;

    $scope.songsInAlbum = DashService.songsInAlbum;

    $scope.$watch('dashService.songsInAlbum', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.songsInAlbum = newVal;
        }
    }, true);

    $scope.$watch('dashService.currentAlbum', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.currentAlbum = newVal;
            $scope.fetchSongsInAlbum(); //fetch the songs based on the selected album
        }
    }, true);

    $scope.fetchSongsInAlbum = function () {
        //fetch the list of all the songs in the album
        DashService.fetchSongsInAlbum($scope.currentAlbum).then(
            function onSuccess() {
                console.log('songs data loaded successfully');
            },
            function onError() {
                // Error handling
                $scope.errorMsg = 'Ajax call failed';
            }
        );
    };
    
    $scope.updateSelectedSong = function (song) {
        var songUrl = song.url;
        DashService.setCurrentSong(songUrl);
    };
  }]);
