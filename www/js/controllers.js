angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicSideMenuDelegate, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:


  $scope.$on('$ionicView.enter', function(e) {


  });

  $scope.preventFocus = function () {

    ionic.DomUtil.blurAll();

  }

})

.controller('GeneralController', function($scope) {

  $scope.message = {
    text:''
  };

  $scope.messages = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  
  
  $scope.sendMessage = function (message) {
    $scope.message.text = '';
  }
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

});
