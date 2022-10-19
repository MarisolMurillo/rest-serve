const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    //Middlewares
    this.middlewares()

    //rutas de mi app
    this.routes()
  }

  middlewares() {
    //cors
    this.app.use(cors())

    //lectura y parseo del body

    this.app.use(express.json())

    //diretorio pubblico
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
