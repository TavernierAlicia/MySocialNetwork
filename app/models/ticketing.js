const mongoose = require('mongoose')

const TicketingSchema = new mongoose.Schema({
  event_id: Number,
  name: String,
  cost: Number,
  quantity: Number
}, {
  collection: 'ticketing',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = TicketingSchema
