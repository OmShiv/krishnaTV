var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  var homeUrl = 'http://krishna.tv';

  request(homeUrl, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      //select the list of albums
      var selectElement = $('select[name="jz_path"]').eq(3).find('option');
      var album, albumList=[];
      selectElement.each(function () {
        var selectOption = $(this);
        album = { title : "", href : ""};
        album.href = homeUrl + "/index.php?ext.html=&jz_path=" + selectOption.val();
        album.title = selectOption.text();
        if (selectOption.val() && selectOption.val() !== '') {
          albumList.push(JSON.stringify(album, null, 4));
        }
      });
      fs.writeFile('data/albumList.json', albumList, function(err){
        console.log('File successfully written! - Check your project directory for the output.json file');

      });

      res.send(albumList);
    }
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
