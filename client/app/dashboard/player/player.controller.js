
'use strict';

angular.module('krishnatvApp')
  .controller('PlayerCtrl',['$scope', 'DashService' , function ($scope, DashService) {
    
      // $scope.currentSong = 'https://www.youtube.com/watch?v=0bSPTYExyBM';

      // $scope.dashService = DashService;

      // $scope.$watch('dashService.currentSong', function (newVal, oldVal) {
      //     if (newVal !== oldVal) {
      //       $scope.currentSong = newVal;
      //       console.log($scope.currentSong);
      //     }
      // }, true);
      // 
      console.log(DashService);
      // $scope.songs = [
      //       {
      //           id: 'one',
      //           title: 'Rain',
      //           url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
      //       },
      //       {
      //           id: 'two',
      //           title: 'Walking',
      //           url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
      //       },
      //       {
      //           id: 'three',
      //           title: 'Barrlping with Carl (featureblend.com)',
      //           url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
      //       },
      //       {
      //           id: 'four',
      //           title: 'Angry cow sound?',
      //           url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
      //       },
      //       {
      //           id: 'five',
      //           title: 'Things that open, close and roll',
      //           url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
      //       }
      //   ];

      
}]);
