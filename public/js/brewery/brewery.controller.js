/* global angular */

  angular.module('breweryApp')
  .controller('BreweryIndexController', [
    'Brewery',
    BreweryIndexFunction
  ])
  .controller('BreweryShowController', [
    'Brewery',
    '$stateParams',
    BreweryShowFunction
  ])

  function BreweryIndexFunction (Brewery) {
    this.breweries = Brewery.query()
  }

  function BreweryShowFunction (Brewery, $stateParams) {
    console.log($stateParams)
    this.brewery = Brewery.get({ id: $stateParams.id })
  }
