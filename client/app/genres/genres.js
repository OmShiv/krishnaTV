'use strict';

angular.module('krishnatvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('genres', {
        url: '/genres',
        templateUrl: 'app/genres/genres.html',
        controller: 'GenresCtrl'
      });
  });
