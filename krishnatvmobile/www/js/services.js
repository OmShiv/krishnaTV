angular.module('starter.services', [])
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

  /*Player Service*/
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
