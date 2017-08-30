/* global angular */

(function () {
  angular.module('breweryApp', [
    'ngResource',
    'ui.router'
  ])
  .config(['$stateProvider', function ($stateProvider) {
    console.log($stateProvider)
  }])
})()
