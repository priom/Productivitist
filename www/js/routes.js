angular.module('productivitist.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
      .state('home.shopping', {
        url: '/shopping-page',
        views: {
          'shopping-tab': {
            templateUrl: 'templates/shopping.html',
            controller: 'shoppingCtrl'
          }
        }
      })

      .state('home.priority', {
        url: '/priority-page',
        views: {
          'priority-tab': {
            templateUrl: 'templates/priority.html',
            controller: 'priorityCtrl'
          }
        }
      })

      .state('home.projects', {
        url: '/projects-page',
        views: {
          'projects-tab': {
            templateUrl: 'templates/projects.html',
            controller: 'projectsCtrl'
          }
        }
      })

      .state('home', {
        url: '/Home-page',
        templateUrl: 'templates/home.html',
        controller: 'mainCtrl',
      })

  $urlRouterProvider.otherwise('/Home-page/priority-page')
});
