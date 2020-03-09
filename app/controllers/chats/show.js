  
const Chat = require('../../models/chat.js')

/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.ChatModel = connect.model('Chat', Chat)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/chat/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.ChatModel.findById(id).then(chat => {
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

module.exports = Show
