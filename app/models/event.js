const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  creator_id: Number,
  admins: [
    {
      user_id: Number,
    }
  ],
  participants: [
    {
      user_id: Number,
    }
  ],
  name: String,
  description: String,
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
  },

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
