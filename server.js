const express = require('express')
const connect = require('./config/db/connect')

const port = process.env.PORT || 3000
const app = express()

module.exports = app

require('./config/express')(app)
require('./config/routes')(app)

connect()
.then(db => {
  db.on('error', console.log)
  listen()
})
.catch(err => {
  console.log('error connection to the database')
  console.log(err)
})

function listen () {
  if (app.get('env') === 'test') return
  app.listen(port)
  console.log(`listening on port ${port}`)
}
