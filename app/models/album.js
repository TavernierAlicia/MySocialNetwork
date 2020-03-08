const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
  event_id: Number,
  description: String,
  pictures: [
    {
      path: String, 
      description: String,
    }
  ],
}, {
  collection: 'albums',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = AlbumSchema
