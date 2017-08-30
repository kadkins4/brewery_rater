/* global angular */

  angular.module('breweryApp')
  .factory('Brewery', [
    '$resource',
    breweryService
  ])

  function breweryService ($resource) {
    return $resource('/api/breweries/:id', {}, {
      update: { method: 'PUT' }
    })
  }
