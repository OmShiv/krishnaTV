'use strict';

angular.module('krishnatvApp')
  .factory('DashService', function ($location, $rootScope, $http, User, $cookieStore, $q) {

    var factory = {
      songsInAlbum : null,
      albumsInCategory : null,
      currentAlbum : null,
      currentCategory : null,
      currentSong: null,

      /**
       * Function to make the ajax call and fetch the list of all the albums in the selected category
       * @param  {String}   categoryId  - ID of the selected category
       * @param  {Function} callback - A callback function
       * @return {Function}            - deferred Promise
       */
      fetchAlbumsInCategory: function(categoryId, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.get('/api/albums/albumsInCategory/' + categoryId).
        success(function(data) {
          deferred.resolve(data);
          factory.albumsInCategory = data;
          return cb();
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },
      /**
       * Function to make the ajax call and fetch the list of all the songs in the selected album
       * @param  {String}   albumId  - ID of the selected album
       * @param  {Function} callback - A callback function
       * @return {Function}            - deferred Promise
       */
      fetchSongsInAlbum: function(albumId, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.get('/api/songs/songsInAlbum/' + albumId).
        success(function(data) {
          deferred.resolve(data);
          factory.songsInAlbum = data;
          return cb();
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      /**
       * Set the value of currentAlbum
       *
       * @param  {String} albumId - album ID
       */
      setCurrentAlbum: function(albumId) {
        factory.currentAlbum = albumId;
        console.log('album selected'+ albumId);
      },

      /**
       * Set the value of currentCategory
       *
       * @param  {String} categoryId - category ID
       */
      setCurrentCategory : function (categoryId) {
        factory.currentCategory = categoryId;

      },

      /**
       * setCurrentSong
       *
       * @param  {String} songUrl - actual path of the song
       */
       setCurrentSong : function (songUrl) {
        factory.currentSong = songUrl;
      }
      
    };


    return factory;

  });
