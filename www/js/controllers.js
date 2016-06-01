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

.controller('GeneralController', function($scope, $ionicScrollDelegate) {

  $scope.message = {
    text:''
  };

  $scope.messages = [
    {id: 1, user: 'Luis Bahamonde', avatar:'img/avatar1.gif', date:'10:43 AM', text:'hello world!' }
  ];

  $scope.ajustarScroll = function () {

    $ionicScrollDelegate.resize();
    $ionicScrollDelegate.scrollBottom(true);

  }
  
  $scope.sendMessage = function (message) {
    $scope.messages.push({user: 'Luis Bahamonde', avatar:'img/avatar1.gif', date:'10:43 AM', text:message.text});
    $scope.message.text = '';
    $ionicScrollDelegate.scrollBottom(true);
  }
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

});
