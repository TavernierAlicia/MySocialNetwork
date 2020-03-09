const Event = require('../../models/event.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/event/create', (req, res) => {
      try {
        const eventModel = new this.EventModel(req.body)
        // console.log(groupModel.save())
        
        eventModel.save().then(event => {
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

module.exports = Create
