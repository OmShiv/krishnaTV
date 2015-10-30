angular.module('starter.services', [])
  /** Album services **/
  .factory('Albums', function ($http, $q, SERVER) {
    var o = {
      selectedAlbum: null
    };

    //gets the entire list of the user's favorites from server
    o.getAllAlbums = function() {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/albums'
        //params: { session_id: o.session_id }
      }).success(function(data){
        // merge data into the queue
        o.albums = data;
      });
    };

    //gets the entire list of the user's favorites from server
    o.getAlbum = function(albumId) {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/albums/'+ albumId
        //params: { session_id: o.session_id }
      }).success(function(data){
        // merge data into the queue
        o.selectedAlbum = data;
      });
    };

    o.getSongsInAlbum = function (albumId) {
        //fetch the songs of the same album
        return $http({
          method: 'GET',
          url: SERVER.url + '/api/songs/albumsongs/'+ albumId
          //params: { session_id: o.session_id }
          }).success(function(data) {
            // merge data into the queue
            o.selectedAlbum.tracks = data;
          })
    };
    return o;
  })

  /**Genre Services**/
  .factory('Genres', function ($http, $q, SERVER) {
    var o = {
      selectedGenre: null
    };

    //gets the entire list of the user's favorites from server
    o.getAllGenres = function () {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/categories'
        //params: { session_id: o.session_id }
      }).success(function (data) {
        // merge data into the queue
        o.genres = data;
      });
    };

    //gets the entire list of the user's favorites from server
    o.getGenre = function(genreId) {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/categories/'+ genreId
        //params: { session_id: o.session_id }
      }).success(function(data){
        // merge data into the queue
        o.selectedGenre = data;
      });
    };

    o.getSongsInGenre = function (genreId) {
      //fetch the songs of the same genre
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/songs/categorysongs/'+ genreId
        //params: { session_id: o.session_id }
      }).success(function(data) {
        // merge data into the queue
        o.selectedGenre.tracks = data;
      })
    };
    return o;
  })

  /**Playlist Services**/
  .factory('Playlists', function ($http, $q, SERVER) {
    var o = {
      selectedPlaylist: null
    };

    //gets the entire list of the user's favorites from server
    o.getAllPlaylists = function () {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/playlists'
        //params: { session_id: o.session_id }
      }).success(function (data) {
        // merge data into the queue
        o.playlists = data;
      });
    };

    //gets the entire list of the user's favorites from server
    o.getPlaylist = function(playlistId) {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/playlists/'+ playlistId
        //params: { session_id: o.session_id }
      }).success(function(data){
        // merge data into the queue
        o.selectedPlaylist = data;
      });
    };

    o.getSongsInPlaylist = function (playlistId) {
      //fetch the songs of the same playlist
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/songs/playlistsongs/'+ playlistId
        //params: { session_id: o.session_id }
      }).success(function(data) {
        // merge data into the queue
        o.selectedPlaylist.tracks = data;
      })
    };
    return o;
  })

  /**Player Service**/
  .factory('Player', function ($http, $q, SERVER) {
    var o = {
      currentTrack: null
    };
    o.setCurrentTrack = function (track) {
      o.currentTrack = track;
    };
    return o;
  })
;
