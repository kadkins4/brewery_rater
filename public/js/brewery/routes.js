/* global angular */

  angular.module('breweryApp')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      RouterFunction
    ])

  function RouterFunction ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('breweriesIndex', {
        url: '/breweries',
        templateUrl: 'views/index.html',
        controller: 'BreweryIndexController',
        controllerAs: 'vm'
      })
      .state('breweriesShow', {
        url: '/breweries/:id',
        templateUrl: 'views/show.html',
        controller: 'BreweryShowController',
        controllerAs: 'vm'
      })
      .state('breweriesNew', {
        url: '/breweries/new',
        templateUrl: 'views/new.html',
        controller: 'BreweryNewController',
        controllerAs: 'vm'
      })
      .state('breweriesEdit', {
        url: '/breweries/:id/edit',
        templateUrl: 'views/edit.html',
        controller: 'BreweryEditController',
        controllerAs: 'vm'
      })
    $urlRouterProvider.otherwise('/breweries')
  }
