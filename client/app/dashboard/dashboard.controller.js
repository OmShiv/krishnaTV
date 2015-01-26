
'use strict';

angular.module('krishnatvApp')
  .controller('DashboardCtrl', ['$scope', '$http', 'DashService', function ($scope, $http, DashService) {
    $scope.currentCategory = null;
    $scope.allCategories = null;
    $scope.allAlbums = null;
    $scope.currentAlbum = null;
    $scope.dashService = DashService ;

    $scope.$watch('dashService.currentCategory', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.currentCategory = newVal;
        }
    }, true);


    $scope.$watch('dashService.currentAlbum', function(newVal, oldVal){
        if(newVal !== oldVal) {
            $scope.currentAlbum = newVal;
        }
    }, true);

	//fetch all categories
	$http.get('/api/categories').success(function(allCategories) {
      $scope.allCategories = allCategories;
      //socket.syncUpdates('category', $scope.allCategories);
    });

	//fetch all albums
    $http.get('/api/albums').success(function(allAlbums) {
      $scope.allAlbums = allAlbums;
      //socket.syncUpdates('album', $scope.allAlbums);
    });

    //when a album is clicked 
    $scope.updateSelectedAlbum = function (album, category) {
    	var albumId = album.id;
    	$scope.selectedCat = category.id;
    	DashService.setCurrentAlbum(albumId);
    };

  }]);