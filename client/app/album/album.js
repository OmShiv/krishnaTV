'use strict';

angular.module('krishnatvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('album', {
        url: '/albums/:albumId',
        templateUrl: 'app/album/album.html',
        controller: 'AlbumCtrl'
      });
  });
