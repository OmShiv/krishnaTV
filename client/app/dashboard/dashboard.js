'use strict';

angular.module('krishnatvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
            '': {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'DashboardCtrl'
            },
            'songListBlock@dashboard': {
                templateUrl: 'app/dashboard/songList/songList.html',
                controller: 'songListCtrl'
            },
            'albumListBlock@dashboard': {
                templateUrl: 'app/dashboard/albumList/albumList.html',
                controller: 'albumListCtrl'
            },
            'playerBlock@dashboard': {
                templateUrl: 'app/dashboard/player/player.html',
                controller: 'PlayerCtrl'
            },
            'categoryListBlock@dashboard': {
                templateUrl: 'app/dashboard/categoryList/categoryList.html',
                controller: 'categoryListCtrl'
            },
        }
    });
  });