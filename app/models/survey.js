const mongoose = require('mongoose')

const SurveySchema = new mongoose.Schema({
  name: String,
  group_id: mongoose.Schema.Types.ObjectId,
  creator_id: mongoose.Schema.Types.ObjectId,
  questions: [
    {
      title: String,
      responces: [
        {
          title: String
        }
      ],
      participants: [
        {
          user_id: mongoose.Schema.Types.ObjectId,
          responce: mongoose.Schema.Types.ObjectId
        }
      ]
    }
  ]
}, {
  collection: 'surveys',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = SurveySchema
