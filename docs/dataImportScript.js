var songsTable = document.getElementsByClassName('jz_track_table')[0],
	songRows = songsTable.getElementsByTagName('tr')
	singleSong, songLinkElement, songDurationElement;
for (var i=0, l=songRows.length; i < l; i++) {
	//loop through the rows of the table and look for Song Title, URL, song duration
	singleSong = songRows[i];
	singleRowTdElements = singleSong.getElementsByClassName('jz_track_table_songs_td');
	songLinkElement = singleSong.getElementsByClassName('jz_track_table_songs_href')[0];
	songDurationElement = singleRowTdElements[singleRowTdElements.length - 1];
	//print as comma separated
	console.log(songLinkElement.baseURI + ',' + songLinkElement.innerText + ',' + songLinkElement.href + ',' + songDurationElement.innerText);
}

/**
 * jz_track_table
 * 	jz_track_table_songs_td
 * 	jz_track_table_songs_td
 * 		jz_track_table_songs_href
 * 	jz_track_table_songs_td
 * 	jz_track_table_songs_td
 */