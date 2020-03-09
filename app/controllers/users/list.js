  
const User = require('../../models/user.js')

/**
 * Create
 * @class
 */
class List {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', User)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/user/list', (req, res) => {
      try {
        this.UserModel.find().then(user => {
          res.status(200).json(user || {})
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
