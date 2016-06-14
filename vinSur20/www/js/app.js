// Ionic Starter App
var firebaseUrl = "https://fantastic-meme.firebaseio.com";
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })



  // State to represent Login View
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })



  // Each tab has its own nav history stack:
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('tab.chat', {
    url: '/chat',
    views: {
        'tab-chat': {
            templateUrl: 'templates/tab-chat.html',
            controller: 'ChatCtrl'
        }
    }
  })

  .state('fiche', {
    url: "/fiche",
    templateUrl: "templates/fiche.html",
    controller: 'FicheCtrl'
  });


  // Each tab has its own nav history stack:

  // .state('tab.rooms', {
  //     url: '/rooms',
  //     views: {
  //         'tab-rooms': {
  //             templateUrl: 'templates/tab-rooms.html',
  //             controller: 'RoomsCtrl'
  //         }
  //     }
  // })
  //
  // .state('tab.chat', {
  //     url: '/chat',
  //     views: {
  //         'tab-chat': {
  //             templateUrl: 'templates/tab-chat.html',
  //             controller: 'ChatCtrl'
  //         }
  //     }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/fiche');

});
