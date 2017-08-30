const join = require('path').join
const apiRoutes = require('./api/routes')
const config = require('./')

module.exports = function routesConfig (app) {
  app.use('/api', apiRoutes)
  app.get('*', (req, res) => {
    res.sendFile(join(config.root, 'public/index.html'))
  })
}
