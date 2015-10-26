angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('AlbumsCtrl', function($scope, $stateParams) {
    $scope.items = [
        {
    "title": "Bhagavad-gita Classes",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Bhagavad-gita Classes"
},{
    "title": "CD04 Sri Brahma Samhita",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD04 Sri Brahma Samhita"
},{
    "title": "CD08 Dasavatara",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD08 Dasavatara"
},{
    "title": "CDV02 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV02 Vintage Series"
},{
    "title": "CDV06 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV06 Vintage Series"
},{
    "title": "Sri Isopanisad Classes",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Sri Isopanisad Classes"
},{
    "title": "Srimad Bhagavatam, 5th Canto",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam, 5th Canto"
},{
    "title": "1973 Original Audio",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=1973 Original Audio"
},{
    "title": "1974 Original Audio",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=1974 Original Audio"
},{
    "title": "1975 Original Audio",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=1975 Original Audio"
},{
    "title": "1976 Original Audio",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=1976 Original Audio"
},{
    "title": "1977 Original Audio",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=1977 Original Audio"
},{
    "title": "Addresses",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Addresses"
},{
    "title": "Arrival Addresses",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Arrival Addresses"
},{
    "title": "Caitanya Caritamrta, Adi Lila",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Caitanya Caritamrta, Adi Lila"
},{
    "title": "Caitanya Caritamrta, Madhya Lila",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Caitanya Caritamrta, Madhya Lila"
},{
    "title": "CD01 Krishna Meditations",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD01 Krishna Meditations"
},{
    "title": "CD02 Hare Krishna Classics and Originals",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD02 Hare Krishna Classics and Originals"
},{
    "title": "CD03 Songs of the Spritual Masters",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD03 Songs of the Spritual Masters"
},{
    "title": "CD05 Prabhupada Bhajans",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD05 Prabhupada Bhajans"
},{
    "title": "CD06 Goddess of Fortune",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD06 Goddess of Fortune"
},{
    "title": "CD07 Vibhavari Sesa",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD07 Vibhavari Sesa"
},{
    "title": "CD07 Vibhavari-sesa",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD07 Vibhavari-sesa"
},{
    "title": "CD09 Jaya Radhe Jaya Krishna",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD09 Jaya Radhe Jaya Krishna"
},{
    "title": "CD10 Sri Sri Guruvastakam",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD10 Sri Sri Guruvastakam"
},{
    "title": "CD11 Sri Sri Siksastakam",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD11 Sri Sri Siksastakam"
},{
    "title": "CD12 Hare Krishna Maha Mantra",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD12 Hare Krishna Maha Mantra"
},{
    "title": "CD13 Gauranga Bhajan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD13 Gauranga Bhajan"
},{
    "title": "CD14-Nitai-Pada-Kamala",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CD14-Nitai-Pada-Kamala"
},{
    "title": "CDJ-2  Sadhana Series - Japa with Shehnai",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDJ-2  Sadhana Series - Japa with Shehnai"
},{
    "title": "CDJ1 Japa CD",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDJ1 Japa CD"
},{
    "title": "CDS-3  Mridanga Lessons",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDS-3  Mridanga Lessons"
},{
    "title": "CDV01 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV01 Vintage Series"
},{
    "title": "CDV03 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV03 Vintage Series"
},{
    "title": "CDV04 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV04 Vintage Series"
},{
    "title": "CDV05 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV05 Vintage Series"
},{
    "title": "CDV07 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV07 Vintage Series"
},{
    "title": "CDV08 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV08 Vintage Series"
},{
    "title": "CDV09 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV09 Vintage Series"
},{
    "title": "CDV10 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV10 Vintage Series"
},{
    "title": "CDV11 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV11 Vintage Series"
},{
    "title": "CDV12 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV12 Vintage Series"
},{
    "title": "CDV13 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV13 Vintage Series"
},{
    "title": "CDV14 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV14 Vintage Series"
},{
    "title": "CDV15 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV15 Vintage Series"
},{
    "title": "CDV16 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV16 Vintage Series"
},{
    "title": "CDV17 Vintage Series",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV17 Vintage Series"
},{
    "title": "CDV18 King Kulashekar",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV18 King Kulashekar"
},{
    "title": "CDV19 Nrsimha Prayers and Kirtan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV19 Nrsimha Prayers and Kirtan"
},{
    "title": "CDV20 Gurvastakam and Kirtan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV20 Gurvastakam and Kirtan"
},{
    "title": "CDV21 Bhaja Bhakata Vatsala and Kirtan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV21 Bhaja Bhakata Vatsala and Kirtan"
},{
    "title": "CDV22 Gurvastakam and Kirtan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV22 Gurvastakam and Kirtan"
},{
    "title": "CDV23 Gurvastakam and Parama Karuna",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV23 Gurvastakam and Parama Karuna"
},{
    "title": "CDV24 Visnujana and Prabhupada Kirtan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV24 Visnujana and Prabhupada Kirtan"
},{
    "title": "CDV25 Udilo Aruna",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV25 Udilo Aruna"
},{
    "title": "CDV26 Brahma Samhita and Kirtan",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=CDV26 Brahma Samhita and Kirtan"
},{
    "title": "Festivals",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Festivals"
},{
    "title": "Hindi Lectures and Conversations",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Hindi Lectures and Conversations"
},{
    "title": "Lectures",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Lectures"
},{
    "title": "Media Interviews",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Media Interviews"
},{
    "title": "Morning Walk Conversations",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Morning Walk Conversations"
},{
    "title": "Nectar of Devotion Classes",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Nectar of Devotion Classes"
},{
    "title": "New Krsna Book Dictation Tapes",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=New Krsna Book Dictation Tapes"
},{
    "title": "Original Bhajans and Purports",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Original Bhajans and Purports"
},{
    "title": "Room Conversations",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Room Conversations"
},{
    "title": "SP01  Reciting Bg Ch. 1 - 11.27",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=SP01  Reciting Bg Ch. 1 - 11.27"
},{
    "title": "SP02  Reciting Cc Adi-lila Ch. 7 - 13.31",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=SP02  Reciting Cc Adi-lila Ch. 7 - 13.31"
},{
    "title": "Srimad Bhagavatam Classes",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam Classes"
},{
    "title": "Srimad Bhagavatam, 1st Canto",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam, 1st Canto"
},{
    "title": "Srimad Bhagavatam, 2nd Canto",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam, 2nd Canto"
},{
    "title": "Srimad Bhagavatam, 3rd Canto",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam, 3rd Canto"
},{
    "title": "Srimad Bhagavatam, 6th Canto",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam, 6th Canto"
},{
    "title": "Srimad Bhagavatam, 7th Canto",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Srimad Bhagavatam, 7th Canto"
},{
    "title": "Stories",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Stories"
},{
    "title": "Unknown",
    "href": "http://krishna.tv/index.php?ext.html=&jz_path=Unknown"
}
  ];
})

.controller('AlbumCtrl', function($scope, $stateParams) {
})


;
