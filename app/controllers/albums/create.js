const Album = require('../../models/album.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/album/create', (req, res) => {
      try {
        const albumModel = new this.AlbumModel(req.body)
        // console.log(groupModel.save())
        
        albumModel.save().then(album => {
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

module.exports = Create
