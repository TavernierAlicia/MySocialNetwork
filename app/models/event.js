const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  creator_id: mongoose.Schema.Types.ObjectId,
  group_id: mongoose.Schema.Types.ObjectId,
  admins: [
    {
      user_id: mongoose.Schema.Types.ObjectId
    }
  ],
  participants: [
    {
      user_id: mongoose.Schema.Types.ObjectId
    }
  ],
  name: String,
  description: String,
  tickets: Boolean,
  begin_date: Date,
  end_date: Date,
  street_num: Number,
  street_name: String,
  city: String,
  zip_code: String,
  country: String,
  cover_picture: {
    type: String,
    default: 'https://www.g33kmania.com/wp-content/uploads/Tyrion-Lannister-400x400.jpg'
  },
  privacy: {
    type: Boolean,
    default: true
  }

}, {
  collection: 'events',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = EventSchema
