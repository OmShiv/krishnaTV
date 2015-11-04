'use strict';

angular.module('krishnatvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('albums', {
        url: '/albums',
        templateUrl: 'app/albums/albums.html',
        controller: 'AlbumsCtrl'
      });
  });
