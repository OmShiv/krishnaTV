'use strict';

angular.module('krishnatvApp')
  .controller('GenresCtrl', function ($scope, $http, socket) {
    $scope.genres = [];

    $http.get('/api/categories').success(function(genres) {
      $scope.genres = genres;
    });

  });
