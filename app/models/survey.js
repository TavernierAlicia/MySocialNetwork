const mongoose = require('mongoose')

const SurveySchema = new mongoose.Schema({
  name: String,
  group_id: Number,
  creator_id: Number,
  questions: [
    {
      title: String,
      responces: [
        {
          title: String,
        }
      ],
      participants: [
        {
          user_id: Number,
          responce: String
        }
      ]
    }
  ],
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
