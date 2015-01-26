
'use strict';

angular.module('krishnatvApp')
  .controller('albumListCtrl',['$scope', '$http', 'DashService', function ($scope, $http, DashService) {
    $scope.allAlbums = [];

    $scope.currentCategory = null;

    $scope.currentAlbum = null;

    $scope.dashService = DashService;

    $scope.albumsInCategory = DashService.albumsInCategory;

    $scope.$watch('dashService.albumsInCategory', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.albumsInCategory = newVal;
        }
    }, true);

    $scope.$watch('dashService.currentCategory', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.currentCategory = newVal;
            $scope.fetchAlbumsInCategory(); //fetch the albums based on the selected album
        }
    }, true);

    $scope.$watch('dashService.currentAlbum', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.currentAlbum = newVal;
        }
    }, true);

    $scope.fetchAlbumsInCategory = function () {
        //fetch the list of all the songs in the album
        DashService.fetchAlbumsInCategory($scope.currentCategory).then(
            function onSuccess() {
                console.log('albums data loaded successfully');
            },
            function onError() {
                // Error handling
                $scope.errorMsg = 'Ajax call failed';
            }
        );
    };

    $scope.updateSelectedAlbum = function (album) {
    	var albumId = album.id;
    	DashService.setCurrentAlbum(albumId);
    };
  }]);
