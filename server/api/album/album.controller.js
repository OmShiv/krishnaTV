/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /albums              ->  index
 * POST    /albums              ->  create
 * GET     /albums/:id          ->  show
 * PUT     /albums/:id          ->  update
 * DELETE  /albums/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Album = require('./album.model');

// Get list of albums
exports.index = function(req, res) {
  Album.find(function (err, albums) {
    if(err) { return handleError(res, err); }
    res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
    return res.json(200, albums);
  });
};

// Get list of albums in a particular category
exports.indexCategory = function(req, res) {
  console.log(req);
  Album.find()
  .where('category').equals(req.params.id)
  .exec(function (err, albums) {
    if(err) { return handleError(res, err); }
    return res.json(200, albums);
  });
};

// Get a single album
exports.show = function(req, res) {
  Album.findOne({"id" : req.params.id}, function (err, album) {
    if(err) { return handleError(res, err); }
    if(!album) { return res.send(404); }
    res.header('Access-Control-Allow-Origin', "*");     // TODO - Make this more secure!!
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
    return res.json(album);
  });
};

// Creates a new album in the DB.
exports.create = function(req, res) {
  Album.create(req.body, function(err, album) {
    if(err) { return handleError(res, err); }
    return res.json(201, album);
  });
};

// Updates an existing album in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Album.findById(req.params.id, function (err, album) {
    if (err) { return handleError(res, err); }
    if(!album) { return res.send(404); }
    var updated = _.merge(album, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, album);
    });
  });
};

// Deletes a album from the DB.
exports.destroy = function(req, res) {
  Album.findById(req.params.id, function (err, album) {
    if(err) { return handleError(res, err); }
    if(!album) { return res.send(404); }
    album.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
