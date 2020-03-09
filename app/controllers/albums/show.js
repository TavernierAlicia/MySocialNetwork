  
const Album = require('../../models/album.js')

/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/album/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.AlbumModel.findById(id).then(album => {
          res.status(200).json(album || {})
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
