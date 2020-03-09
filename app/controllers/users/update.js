const users = require('../../models/user.js')

/**
 * Create
 * @class
 */
class Update {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.put('/user/update/:id', (req, res) => {
        const { id } = req.params
        const { body } = req
        const user = findByIdAndUpdate({ _id: id},body, (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }).then(user => {
          res.status(200).json(user || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
        console.log('TRY 1')
        if (!user) {
          console.log('TRY 2')
          res.status(200).json({})

          return
        }
        console.log('TRY 3')
        res.status(200).json(Object.assign({}, user, body))
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
