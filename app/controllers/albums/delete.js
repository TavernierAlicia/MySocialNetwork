const Album = require('../../models/album')

/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/album/delete/:id', (req, res) => {
      const { id } = req.params
      this.AlbumModel.findByIdAndDelete({ _id: id }, (err, result) => {
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
