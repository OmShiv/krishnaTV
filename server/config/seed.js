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
  Song.create({
    id : 'cd01t01',
    title : 'Song Title One',
    artist : 'Artist One',
    album: 'cd01',
    url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
  }, {
    id : 'cd01t02',
    title : 'Song Title Two',
    artist : 'Artist One',
    album: 'cd01',
    url: 'http://krishna.tv/index.php?action=download&jz_path=1974+Original+Audio%2F740102SB-LOS+ANGELES.mp3&type=track&ext.html'
  }, {
    id : 'cd01t03',
    title : 'Song Title Three',
    artist : 'Artist One',
    album: 'cd01',
    url: 'http://krishna.tv/index.php?action=download&jz_path=1974+Original+Audio%2F740103MW-LOS+ANGELES.mp3&type=track&ext.html'
  }, {
    id : 'cd02t01',
    title : 'Song Title Four',
    artist : 'Artist Two',
    album: 'cd02',
    url: 'http://krishna.tv/index.php?action=download&jz_path=CDJ1+Japa+CD%2FCDJ+1-1++Group+Japa.mp3&type=track&ext.html'
  }, {
    id : 'cd02t02',
    title : 'Song Title Five',
    artist : 'Artist Two',
    album: 'cd02',
    url: 'http://krishna.tv/index.php?action=download&jz_path=CDJ1+Japa+CD%2FCDJ+1-2++Japa+by+Example.mp3&type=track&ext.html'
  }, {
    id : 'cd03t01',
    title : 'Song Title Six',
    artist : 'Artist Three',
    album: 'cd03',
    url: 'http://krishna.tv/index.php?action=download&jz_path=Bhagavad-gita+Classes%2FBg_00-01_NY_1966-02-19_-20_Intro_1--_to_Bhagavad_Gita.mp3&type=track&ext.html'
  }, {
    id : 'cd03t02',
    title : 'Song Title Seven',
    artist : 'Artist Three',
    album: 'cd03',
    url: 'http://krishna.tv/index.php?action=download&jz_path=Bhagavad-gita+Classes%2FBg_00-02_NY_1966-02-19_-20_Intro_2--_to_Bhagavad_Gita.mp3&type=track&ext.html'
  }, {
    id : 'cd03t03',
    title : 'Song Title Eight',
    artist : 'Artist Three',
    album: 'cd03',
    url: 'http://krishna.tv/index.php?action=download&jz_path=Bhagavad-gita+Classes%2FBg_00-03_NY_1966-02-19_-20_Intro_3--_to_Bhagavad_Gita.mp3&type=track&ext.html'
  }, {
    id : 'cd03t04',
    title : 'Song Title Nine',
    artist : 'Artist Three',
    album: 'cd03',
    url : 'http://krishna.tv/index.php?action=download&jz_path=Bhagavad-gita+Classes%2FBg_00-04_LA_1968-23-11_Intro_to_Bhagavad_Gita_-_--etc.mp3&type=track&ext.html'
  });
});

Album.find({}).remove(function() {
  Album.create({
    id : 'cd01',
    title : 'Album Title One',
    artist : 'Artist One',
    category : ['at01']
  }, {
    id : 'cd02',
    title : 'Album Title Two',
    artist : 'Artist Two',
    category : ['at02']
  }, {
    id : 'cd03',
    title : 'Album Title Three',
    artist : 'Artist One',
    category : ['at01', 'at02']
  }, {
    id : 'cd04',
    title : 'Album Title Four',
    artist : 'Artist Two',
    category : ['at03']
  });
});

Category.find({}).remove(function() {
  Category.create({
    id : 'at01',
    title : 'Category Title One'
  }, {
    id : 'at02',
    title : 'Category Title Two'
  }, {
    id : 'at03',
    title : 'Category Title Three'
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