const Survey = require('../../models/survey.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Survey', Survey)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/survey/create', (req, res) => {
      try {
        const surveyModel = new this.SurveyModel(req.body)

        surveyModel.save().then(survey => {
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

module.exports = Create
