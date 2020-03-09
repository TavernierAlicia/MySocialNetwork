const Survey = require('../../models/survey')

/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Survey', Survey)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/survey/delete/:id', (req, res) => {
      const { id } = req.params
      this.SurveyModel.findByIdAndDelete({ _id: id }, (err, result) => {
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
