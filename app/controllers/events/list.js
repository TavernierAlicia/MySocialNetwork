  
const Event = require('../../models/event.js')

/**
 * Create
 * @class
 */
class List {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/event/list', (req, res) => {
      try {
        this.EventModel.find().then(event => {
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

module.exports = List
