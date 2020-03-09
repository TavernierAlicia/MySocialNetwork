const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  name: String,
  description: String,
  creator_id: mongoose.Schema.Types.ObjectId,
  admins: [
    {
      user_id: mongoose.Schema.Types.ObjectId
    }
  ],
  users: [
    {
      user_id: mongoose.Schema.Types.ObjectId
    }
  ],
  icone: {
    type: String,
    default: 'https://www.g33kmania.com/wp-content/uploads/Tyrion-Lannister-400x400.jpg'
  },
  cover_picture: {
    type: String,
    default: 'https://www.g33kmania.com/wp-content/uploads/Tyrion-Lannister-400x400.jpg'
  },

  group_type: ['public', 'private', 'secret'], 
  allow_user_publish: {
    type: Boolean,
    default: true 
  },
  allow_user_event: {
    type: Boolean,
    default: true
  }

}, {
  collection: 'groups',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = GroupSchema
