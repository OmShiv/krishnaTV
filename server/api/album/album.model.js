'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlbumSchema = new Schema({
	id: String,
  title: String,
  artist: String,
  categories: [],
  image: String
});

module.exports = mongoose.model('Album', AlbumSchema);
