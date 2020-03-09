const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
  group_id: Number,
  event_id: Number,
  users: [
    {
      user_id: Number
    }
  ],
  messages: [
    {
      user_id: Number,
      content: String,
      comments: [
        {
          user_id: Number,
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
