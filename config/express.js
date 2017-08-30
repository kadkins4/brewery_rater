const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./')

const env = process.env.NODE_ENV || 'development'

module.exports = function expressConfig (app) {
  app.use(cors({
    origin: ['http://localhost:3000', '*'],
    optionsSuccessStatus: 200,
    credentials: true
  }))

  app.use(express.static(config.root + '/public'))
  app.use(express.static(config.root + '/node_modules'))

  if (env !== 'test') app.use(morgan('dev'))

  app.use(bodyParser.json())
}
