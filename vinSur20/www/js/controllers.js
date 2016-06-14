angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  console.log('Home Controller initialized');

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('RoomsCtrl', function ($scope, Rooms) {
  console.log("Rooms Controller initialized");
  $scope.rooms = Rooms.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope, $ionicModal, $state){
  console.log('Login controller initialized');

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.createUser = function(user){

  }

  $scope.signIn = function(){
    $state.go('tab.rooms');
  }

});
