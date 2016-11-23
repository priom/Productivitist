// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'productivitist' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'productivitist.services' is found in services.js
// 'productivitist.controllers' is found in controllers.js
angular.module('productivitist', ['ionic', 'ionic-material', 'ionMdInput', 'LocalStorageModule', 'productivitist.controllers', 'productivitist.routes', 'productivitist.services', 'productivitist.directives'])

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
