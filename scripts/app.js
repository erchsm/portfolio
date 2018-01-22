(function () {
  'use strict';

  /* Declare app level module which depe&nds on filters, and services */


  angular.module('myApp', [
    'ui.router',
    'duScroll',
    'myApp.directives',
    'myApp.controllers'
    ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller  : 'mainController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller  : 'mainController'
    })
    .state('process', {
      url: '/process',
      templateUrl: 'views/process.html',
      controller  : 'mainController'
    })
    .state('micro-app-interactions', {
      url: '/micro-app-interactions',
      templateUrl: 'views/micro-app-interactions.html',
      controller  : 'mainController'
    })
    .state('micro-app-templates', {
      url: '/micro-app-templates',
      templateUrl: 'views/micro-app-templates.html',
      controller  : 'mainController'
    })
    .state('perforce', {
      url: '/perforce',
      templateUrl: 'views/perforce.html',
      controller  : 'mainController'
    })
    .state('cisco', {
      url: '/cisco',
      templateUrl: 'views/cisco.html',
      controller  : 'mainController'
    })
    .state('protohack-givjoy', {
      url: '/protohack-givjoy',
      templateUrl: 'views/protohack-givjoy.html',
      controller  : 'mainController'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'views/resume.html',
      controller  : 'mainController'
    })
  }])


})();
