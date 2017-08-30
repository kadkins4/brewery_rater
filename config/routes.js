const join = require('path').join
const apiRoutes = require('./api/routes')
const config = require('./')

module.exports = function routesConfig (app) {
  app.use('/api', apiRoutes)
}
