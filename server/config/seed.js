/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Song = require('../api/song/song.model');
var Album = require('../api/album/album.model');
var Category = require('../api/category/category.model');
var Playlist = require('../api/playlist/playlist.model');
var fs = require('fs');
var config = require('./environment');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Song.find({}).remove(function() {
  var obj = JSON.parse(fs.readFileSync(config.projectFolder + '/json/data/_allSongs.json', 'utf8'));
  Song.create(obj);
});

Album.find({}).remove(function() {
  var obj = JSON.parse(fs.readFileSync(config.projectFolder + '/json/data/_allAlbum.json', 'utf8'));
  Album.create(obj);
});

Category.find({}).remove(function() {
  Category.create({
    id : 'at01',
    title : 'Kirtan'
  }, {
    id : 'at02',
    title : 'Lectures'
  }, {
    id : 'at03',
    title : 'Morning Walk Talks'
  }, {
    id : 'at04',
    title : 'Morning Walk Talks'
  });
});

Playlist.find({}).remove(function() {
  Playlist.create({
      title: '1973', id: 1
    }, {
      title: 'My Favorite lectures', id: 2
    }, {
      title: 'Best Kirtans', id: 3
    }, {
      title: 'Japa', id: 4
  });
});


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
