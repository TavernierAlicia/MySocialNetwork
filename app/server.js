const express = require('express')
const routes = require('./controllers/routes.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
    this.port = 3000
  }

  /**
   * db connect
   * @return {Object} connect
   */
  dbConnect () {
    const host = 'mongodb://127.0.0.1:27017/mySocialNetwork'
    const connect = mongoose.createConnection(host)

    connect.on('error', (err) => {
      setTimeout(() => {
        console.log('[ERROR] api dbConnect() -> mongodb error')
        this.connect = this.dbConnect(host)
      }, 5000)

      console.error(`[ERROR] api dbConnect() -> ${err}`)
    })

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000) 
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> close mongodb connection ')
        process.exit(0)
      })
    })

    return connect
  }

  /**
   * middleware
   */
  middleware () {
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
  }

  /**
   * routes
   */
  routes () {
    new routes.users.Create(this.app, this.connect)
    new routes.users.Show(this.app, this.connect)
    new routes.users.Update(this.app, this.connect)
    new routes.users.Delete(this.app, this.connect)
    new routes.users.List(this.app, this.connect)

    new routes.albums.Create(this.app, this.connect)
    new routes.albums.Show(this.app, this.connect)
    new routes.albums.Update(this.app, this.connect)
    new routes.albums.Delete(this.app, this.connect)
    new routes.albums.List(this.app, this.connect)

    new routes.chats.Create(this.app, this.connect)
    new routes.chats.Show(this.app, this.connect)
    new routes.chats.Update(this.app, this.connect)
    new routes.chats.Delete(this.app, this.connect)
    new routes.chats.List(this.app, this.connect)

    new routes.events.Create(this.app, this.connect)
    new routes.events.Show(this.app, this.connect)
    new routes.events.Update(this.app, this.connect)
    new routes.events.Delete(this.app, this.connect)
    new routes.events.List(this.app, this.connect)

    new routes.groups.Create(this.app, this.connect)
    new routes.groups.Show(this.app, this.connect)
    new routes.groups.Update(this.app, this.connect)
    new routes.groups.Delete(this.app, this.connect)
    new routes.groups.List(this.app, this.connect)

    new routes.surveys.Create(this.app, this.connect)
    new routes.surveys.Show(this.app, this.connect)
    new routes.surveys.Update(this.app, this.connect)
    new routes.surveys.Delete(this.app, this.connect)
    new routes.surveys.List(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not Found'
      })
    })
  }

  /**
   * run
   */
  run () {
    try {
      this.connect = this.dbConnect()
      this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(this.port)
      console.info(`[INFO] Server is running on port ${this.port}`)
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
