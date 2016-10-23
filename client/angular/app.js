var myAppModule = angular.module('mia_app', ['ngRoute', 'ui.router', 'ngAnimate']);

myAppModule.config(function ($routeProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    // $urlRouterProvider.otherwise('/home');

    $routeProvider
      .when('/home',{
            templateUrl: 'partials/home.html',
            controller: 'homeController',
      })
      .when('/proceduresMenu',{
            templateUrl: 'partials/proceduresMenu.html',
            controller: 'proceduresMenuController',
      })
      .when('/proceduresMenu/:procedureType',{
            templateUrl: 'partials/procedureType.html',
            controller: 'procedureTypeController',
      })
       .when('/proceduresMenu/:procedureType/testimonials',{
            templateUrl: 'partials/testimonials.html',
            controller: 'procedureTypeController',
      })
      .when('/about',{
            templateUrl: 'partials/about.html',
            // controller: 'procedureTypeController',
      })
      .when('/about/drNguyen',{
            templateUrl: 'partials/aboutDrNguyen.html',
            // controller: 'procedureTypeController',
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

      //check browser support
        // if(window.history && window.history.pushState){
        //     //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

        //  // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

        //  // if you don't wish to set base URL then use this
        //  $locationProvider.html5Mode({
        //          enabled: true,
        //          requireBase: false
        //   });
        // }

});