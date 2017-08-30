const mongoose = require('mongoose')
const connect = require('./connect')
const config = require('../')
const seedBreweries = require('./seedBreweries')

const Brewery = mongoose.model('Brewery')

connect()
.then(_ => Brewery.remove({}))
.then(_ => Brewery.collection.insert(seedBreweries))
.then(breweries => {
  console.log(breweries)
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
