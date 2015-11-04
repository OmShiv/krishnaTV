'use strict';

angular.module('krishnatvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('genre', {
        url: '/genres/:genreId',
        templateUrl: 'app/genre/genre.html',
        controller: 'GenreCtrl'
      });
  });
