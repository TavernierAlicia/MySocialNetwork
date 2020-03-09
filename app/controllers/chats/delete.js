const Chat = require('../../models/chat')

/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.ChatModel = connect.model('Chat', Chat)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/chat/delete/:id', (req, res) => {
      const { id } = req.params
      this.ChatModel.findByIdAndDelete({ _id: id }, (err, result) => {
        if (err) {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        } else {
          res.status(200).json(Object.assign({}, result))
        }
      })
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Delete
