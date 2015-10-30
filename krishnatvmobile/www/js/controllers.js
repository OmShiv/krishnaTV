angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('AlbumsCtrl', function($scope, $stateParams, $window, $ionicLoading, Albums) {

    var showLoading = function() {
      $ionicLoading.show({
        template: '<i class="ion-loading-c"></i>',
        noBackdrop: true
      });
    }

    var hideLoading = function() {
      $ionicLoading.hide();
    }

    showLoading();

    Albums.getAllAlbums()
      .then(function (){
        $scope.items = Albums.albums;
        hideLoading();
      });
})

.controller('AlbumCtrl', function($scope, $stateParams, Albums, Player) {
    Albums.getAlbum($stateParams.albumId)
      .then(function () {
        $scope.album = Albums.selectedAlbum;
        console.log($scope.album);
      })
      .then(function () {
          Albums.getSongsInAlbum($stateParams.albumId)
          .then(function () {
              $scope.albumtracks = Albums.selectedAlbum.tracks;
              console.log($scope.albumtracks);
          })
      });

    $scope.playTrack = function (track) {
        console.log("playing" + track.url);
    }
})

  .controller('GenresCtrl', function($scope, $stateParams, $window, $ionicLoading, Genres) {

    var showLoading = function() {
      $ionicLoading.show({
        template: '<i class="ion-loading-c"></i>',
        noBackdrop: true
      });
    }

    var hideLoading = function() {
      $ionicLoading.hide();
    }

    showLoading();

    Genres.getAllGenres()
      .then(function (){
        $scope.genres = Genres.genres;
        hideLoading();
      });
  })


  .controller('GenreCtrl', function($scope, $stateParams, Genres, Player) {
    Genres.getGenre($stateParams.genreId)
      .then(function () {
        $scope.genre = Genres.selectedGenre;
        console.log($scope.genre);
      })
      .then(function () {
        Genres.getSongsInGenre($stateParams.genreId)
          .then(function () {
            $scope.genretracks = Genres.selectedGenre.tracks;
            console.log($scope.genretracks);
          })
      });

    $scope.playTrack = function (track) {
      console.log("playing" + track.url);
    }
  })

  /**Playlist related controllers**/

  .controller('PlaylistsCtrl', function($scope, $stateParams, $window, $ionicLoading, Playlists) {

    var showLoading = function() {
      $ionicLoading.show({
        template: '<i class="ion-loading-c"></i>',
        noBackdrop: true
      });
    }

    var hideLoading = function() {
      $ionicLoading.hide();
    }

    showLoading();

    Playlists.getAllPlaylists()
      .then(function (){
        $scope.playlists = Playlists.playlists;
        hideLoading();
      });
  })


  .controller('PlaylistCtrl', function($scope, $stateParams, Playlists, Player) {
    Playlists.getPlaylist($stateParams.playlistId)
      .then(function () {
        $scope.playlist = Playlists.selectedPlaylist;
        console.log($scope.playlist);
      })
      .then(function () {
        Playlists.getSongsInPlaylist($stateParams.playlistId)
          .then(function () {
            $scope.playlisttracks = Playlists.selectedPlaylist.tracks;
            console.log($scope.playlisttracks);
          })
      });

    $scope.playTrack = function (track) {
      console.log("playing" + track.url);
    }
  })
;
