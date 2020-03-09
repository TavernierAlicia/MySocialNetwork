  
const Event = require('../../models/event.js')

/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/event/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.EventModel.findById(id).then(event => {
          res.status(200).json(event || {})
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
