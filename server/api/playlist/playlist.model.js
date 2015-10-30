'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaylistSchema = new Schema({
	id: String,
  title: String
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
