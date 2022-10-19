const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config.db')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    //conectar base de datos
    this.conectarDB()

    //Middlewares
    this.middlewares()

    //rutas de mi app
    this.routes()
  }

  conectarDB() {
    dbConnection()
  }

  middlewares() {
    //cors
    this.app.use(cors())

    //lectura y parseo del body

    this.app.use(express.json())

    //diretorio público
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`app escuchando en el http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
