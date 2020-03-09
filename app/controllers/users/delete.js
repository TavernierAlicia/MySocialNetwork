const User = require('../../models/user')

/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', User)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/user/delete/:id', (req, res) => {
      const { id } = req.params
      this.UserModel.findByIdAndDelete({ _id: id }, (err, result) => {
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
