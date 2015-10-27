var express = require('express');
var fs = require('fs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/amandogra/Work/playground/krishnaTV/json/data/albumList.json', 'utf8'));

var counter = 0;
var consolidatedData = [];

//recursive function to read the complete data
var getAlbumData = function () {
  //read the title of each album
  console.log (obj[counter].title);
  var title = obj[counter].title;
  //open the file with the same name
  fs.readFile('/Users/amandogra/Work/playground/krishnaTV/json/data/_' + title + '.json', 'utf8', function (err, data) {
    if (err) throw err;
    //var album = JSON.parse(data);
    var album = {
      title : title,
      tracks : JSON.parse(data)
    };
    consolidatedData.push(JSON.stringify(album, null, 4));
    console.log('an album added');

    //write the data to _consolidated file
    fs.writeFile('data/_consolidated.json', '[' + consolidatedData + ']', function(err){
      console.log('File successfully written! - Check your project directory for the _consolidated.json file');
    });

    console.log('moving to next after adding one');
    counter++;
    if (counter < obj.length) {
      getAlbumData();
    }
  });
};
//read the first album
getAlbumData();
