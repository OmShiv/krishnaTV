var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  var homeUrl = 'http://krishna.tv';

  request(homeUrl, function (err, response, html) {
    if(!err) {
      var $ = cheerio.load(html);
      //select the list of albums
      var selectElement = $('select[name="jz_path"]').eq(3).find('option');
      var album, songList=[], url;
      selectElement.each(function () {
        var selectOption = $(this);
        album = { title : "", href : ""};
        album.href = homeUrl + "/index.php?ext.html=&jz_path=" + selectOption.val();
        album.title = selectOption.text();
        //albumList.push(JSON.stringify(album, null, 4))
        if (selectOption.val() && selectOption.val() != '') {
          url = album.href;
          console.log(url);
          request(url, function(error, response, html){
            if(!error){
              var jQ = cheerio.load(html);

              var title, href, duration,
                json = {},
                data,
                songLinkElements = jQ('.jz_track_table_songs_href');
              for (var i= 0, l=songLinkElements.length; i<l; i++) {
                json = { title : "", href : "", duration : "", album: {}};
                data = jQ(songLinkElements[i]);
                title = data.text();
                href = data.attr('href');
                //TODO: duration
                json.title = title;
                json.href = href;
                json.album = JSON.stringify(album, null, 4);

                songList.push(JSON.stringify(json, null, 4));
                console.log('pushed one more song');
                console.log(JSON.stringify(json, null, 4));
              }
            } else {
              console.log('invalid URL' + url);
            }
          });
        }
        fs.writeFile('data/_' + album.title + '.json', songList, function(err){
          console.log('File successfully written! - Check your project directory for the _' + album.title + '.json file');

        });
      });
      console.log(songList);


      res.send(songList);
    }
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
