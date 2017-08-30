const mongoose = require('mongoose')
const Brewery = mongoose.model('Brewery')

module.exports = {
  load: (req, res, next, id) => {
    Brewery.findOne({_id: id})
    .then(brewery => {
      req.brewery = brewery
      if (!req.brewery) return next(new Error('Brewery not found'))
      next()
    })
    .catch(err => next(err))
  },
  index: (req, res, next) => {
    console.log('breweries index action')
    Brewery.find({})
    .then(breweries => res.json(breweries))
    .catch(err => next(err))
  },
  show: (req, res) => {
    console.log('breweries show action')
    res.json(req.brewery)
  },
  create: (req, res) => {
    console.log('breweries create action')
    const brewery = new Brewery(req.body)
    brewery.save()
    .then(brewery => res.json(brewery))
    .catch((err) => {
      res.json({
        message: 'Error creating brewery',
        errors: [err.toString()]
      })
    })
  },
  update: (req, res) => {
    console.log('breweries update action')
    const brewery = req.brewery
    Object.assign(brewery, req.body)
    brewery.save()
    .then(brewery => res.json(brewery))
    .catch((err) => {
      res.json({
        message: `Error updating brewery id ${brewery._id}`,
        errors: [err.toString()]
      })
    })
  },
  destroy: (req, res) => {
    console.log('breweries destroy action')
    req.brewery.remove()
    .then(_ => res.json({
      message: 'brewery deleted'
    }))
  }
}
