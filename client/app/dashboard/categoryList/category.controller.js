
'use strict';

angular.module('krishnatvApp')
  .controller('categoryListCtrl',['$scope', '$http', 'DashService', function ($scope, $http, DashService) {
    $scope.allCategories = [];

    $http.get('/api/categories').success(function(allCategories) {
      $scope.allCategories = allCategories;
      //socket.syncUpdates('category', $scope.allCategories);
    });

    $scope.updateSelectedCategory = function (category) {
    	var categoryId = category.id;
    	DashService.setCurrentCategory(categoryId);
      //also reset the selected album
      DashService.setCurrentAlbum(null);
    };
  }]);
