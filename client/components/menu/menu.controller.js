'use strict';

angular.module('krishnatvApp')
  .controller('MenuCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Albums',
      'link': '/albums'
    }, {
      'title': 'Genres',
      'link': '/genres'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });