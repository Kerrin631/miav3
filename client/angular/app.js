var myAppModule = angular.module('mia_app', ['ngRoute', 'ui.router', 'ngAnimate']);

myAppModule.config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/home');

    $routeProvider
      .when('/home',{
            templateUrl: 'partials/home.html',
            controller: 'homeController',
      })
      .when('/procedures',{
            templateUrl: 'partials/procedures.html',
            controller: 'proceduresController',
      })
      .otherwise({
          redirectTo: '/home'
        });
      // .state('home', {
      //   url: '/home',
      //   templateUrl: 'partials/home.html',
      //   controller: 'homeController',
      // })
      // .state('procedures', {
      //   url: '/procedures',
      //   templateUrl: 'partials/procedures.html',
      //   controller: 'proceduresController',
      // })
      // .state('home', {
      //   url: '/home',
      //   templateUrl: 'partials/home.html',
      //   onEnter: function($state, userAuthFactory){
      //     if(!userAuthFactory.isLoggedIn()){
      //       $state.go('login');
      //     }
      //   }
      // })

});