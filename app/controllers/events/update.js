const Event = require('../../models/event.js')

/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.put('/event/update/:id', (req, res) => {
      const { id } = req.params
      const { body } = req
      this.EventModel.findByIdAndUpdate({ _id: id }, body, (err, result) => {
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

module.exports = Update
