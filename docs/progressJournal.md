#Progress Journal

---

##October 20, 2015 10:42AM
######Aman Dogra
Rough mockups have been created using ‘Sketch’ (software). We are going to use [ionic framework](http://ionicframework.com/). The base files for ionic framework have also been added under ‘krishnatvmobile’ folder.

##October 24, 2015 09:31AM
######Aman Dogra
After few versions, the script has been created to fetch the data from 'Krishna.tv' in json format. All the JSON files containing the song titles and URL along with the album data have been imported successfully. The script could be found at `/json/allSongs.js` and all the data files are under `/json/data`.

##October 26, 2015 06:26PM
######Aman Dogra
Added another script to consolidate the data from the krishna.tv. Added/updated the Albums controllers/services to show Albums and AlbumSongs on the mobile view. Changes made to the server side to show the songs in cross domain. Now the web view might be broken as we were using a different setup with categories earlier. Now the web view is working on port 9000 and ionic (mobile) view on port 8100.

#October 28, 2015 11:31PM
######Aman Dogra
The smaller version of the player which is displayed on the footer has been added with 'Play', 'Pause' and 'Seek Bar' functionality.
Updated the seed data to add the songs as well as albums. Now the complete data has been scrapped from krishna.tv properly per our need. Also, updated the UI of the album details page. Sketch file has also been converted to PNG so that it could be viewed on machines which do not have Sketch installed. The major portion pending is 'Now Playing' page (player-large). Also the login functionality is pending. UI indeed is not final, but the wireframing (mocks) is almost there.
