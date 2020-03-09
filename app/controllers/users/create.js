const User = require('../../models/user.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', User)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/user/create', (req, res) => {
      try {
        const userModel = new this.UserModel(req.body)
        this.UserModel.findOne({ email: userModel.email }, (err, user) => {
          if (user !== null) {
            res.status(500).json({
              'message': 'Email already used !'
            })
          } else {
            userModel.save().then(user => {
              res.status(200).json(user || {})
            }).catch(err => {
              res.status(500).json({
                'code': 500,
                'message': err
              })
            })
          }
          if (err) {
            console.log(err)
          }
        })
      } catch (err) {
        res.status(500).json({
          'message': err
        })
      }
    })
  }

  /**
   * run
  **/
 
  run () {
    this.middleware()
  }
}

module.exports = Create
