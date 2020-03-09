  
const Survey = require('../../models/survey.js')

/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Survey', Survey)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/survey/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.SurveyModel.findById(id).then(survey => {
          res.status(200).json(survey || {})
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
