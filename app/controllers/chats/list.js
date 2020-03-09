  
const Chat = require('../../models/chat.js')

/**
 * Create
 * @class
 */
class List {
  constructor (app, connect) {
    this.app = app
    this.ChatModel = connect.model('Chat', Chat)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/chat/list', (req, res) => {
      try {
        this.ChatModel.find().then(chat => {
          res.status(200).json(chat || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = List
