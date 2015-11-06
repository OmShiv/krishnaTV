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

#October 30, 2015 10:12PM
######Aman Dogra
Menu items 'Genres' and 'Playlists' are also working now. Songs are yet to be added to Genres and playlists. We also need some mechanism to create new playlists. After this I'll handle the authentication. Once that is done, I'll improve the web view.

#November 03, 2015 11:23PM
######Aman Dogra
Added 'albums' module in the web application. I am trying to update the web application too. Once both web and mobile versions are in shape, I'll tlak to Madhuvyasa Prabhu for further analysis. Add album, genre, player modules to web and then work on the login for mobile.

#November 04, 2015 06:53AM
######Aman Dogra
Genre placeholder, album and player has been added to the web view. Now we have to stylize the player and move the menu items from top nav to side nav. Pending items are search functionality on both web and mobile. Also find a way to introduce the account functionality. It works on the web but not on mobile. Moreover, login is not worth untill we implement 'my playlists' functionality.

#November 04, 2015 05:24PM
######Aman Dogra
Some basic styles have been added to the player, so that all the controls look aligned. I should work on the now playing list next. It is to be fixed for both web and mobile. Start with web and then work on mobile.

#November 06, 2015 07:34AM
######Aman Dogra
Added a new template for the landing page. A lot of text changes and text styles is required. Also added the current playlist to the player. somehow the list is not getting activated by clicking the "now playing" button on the player. Need to fix that. The inside of the now playing list needs some stylilng. Same changes are required on mobile view. Player is still not working on Safari.