const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BrewerySchema = new Schema ({
  name: {
    type: String,
    default: '',
    trim: true
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  beers: []
})

mongoose.model('Brewery', BrewerySchema)
