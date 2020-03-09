const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
  group_id: mongoose.Schema.Types.ObjectId,
  event_id: mongoose.Schema.Types.ObjectId,
  users: [
    {
      user_id: mongoose.Schema.Types.ObjectId
    }
  ],
  messages: [
    {
      user_id: mongoose.Schema.Types.ObjectId,
      content: String,
      comments: [
        {
          user_id: mongoose.Schema.Types.ObjectId,
          content: String
        }
      ]
    }
  ],
  description: String
}, {
  collection: 'chats',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = ChatSchema
