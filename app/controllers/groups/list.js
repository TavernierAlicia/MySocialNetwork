  
const Group = require('../../models/group.js')

/**
 * Create
 * @class
 */
class List {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/group/list', (req, res) => {
      try {
        this.GroupModel.find().then(group => {
          res.status(200).json(group || {})
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
