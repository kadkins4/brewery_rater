const express = require('express')
const router = express.Router()

const breweries = require('../../app/controllers/breweries')

module.exports = router

router.param('breweryId', breweries.load)

router.get('/breweries', breweries.index)
router.post('/breweries', breweries.create)
router.get('/breweries/:breweryId', breweries.show)
router.put('/breweries/:breweryId', breweries.update)
router.delete('/breweries/:breweryId', breweries.destroy)

router.use(function (err, req, res, next) {
  if (err.message &&
  (~err.message.indexOf('not found') ||
  (~err.message.indexOf('cast to objectID failed')))) {
    return next()
  }

  console.error(err.stack)

  res.status(500).json({
    message: 'internal server error',
    error: err.stack
  })
})

router.use(function (req, res) {
  const payload = {
    url: req.originalUrl,
    error: 'not found'
  }
  return res.status(404).json(payload)
})
