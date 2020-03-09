const Chat = require('../../models/chat.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.ChatModel = connect.model('Chat', Chat)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/chat/create', (req, res) => {
      try {
        const chatModel = new this.ChatModel(req.body)
        // console.log(groupModel.save())
        
        chatModel.save().then(chat => {
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

module.exports = Create
