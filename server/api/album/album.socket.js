/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var album = require('./album.model');

exports.register = function(socket) {
  album.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  album.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('album:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('album:remove', doc);
}