const Group = require('../../models/group.js')

/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.put('/group/update/:id', (req, res) => {
      const { id } = req.params
      const { body } = req
      this.GroupModel.findByIdAndUpdate({ _id: id }, body, (err, result) => {
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
