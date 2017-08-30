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
  .controller('BreweryNewController', [
    'Brewery',
    '$state',
    '$stateParams',
    BreweryNewFunction
  ])
  .controller('BreweryEditController', [
    'Brewery',
    '$state',
    '$stateParams',
    BreweryEditFunction
  ])

  function BreweryIndexFunction (Brewery) {
    this.breweries = Brewery.query()
  }

  function BreweryShowFunction (Brewery, $stateParams) {
    this.brewery = Brewery.get({ id: $stateParams.id })
  }

  function BreweryNewFunction (Brewery, $state, $stateParams) {
    this.brewery = new Brewery()
    this.create = function () {
      this.brewery.$save(() => {
        $state.go('breweriesIndex', {})
      })
    }
  }

  function BreweryEditFunction (Brewery, $state, $stateParams) {
    this.brewery = Brewery.get({id: $stateParams.id})
      this.update = function () {
      this.brewery.$update({id: $stateParams.id})
      .then(() => {
        $state.go('breweriesIndex', {})
      })
      }
      this.destroy = function () {
      this.brewery.$delete({id: $stateParams.id})
      .then(() => {
        $state.go('breweriesIndex', {})
      })
      }
    }
