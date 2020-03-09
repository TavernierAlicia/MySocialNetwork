const mongoose = require('mongoose')

const ShoppingListSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  hour: String,
  brings: String
}, {
  collection: 'shopping',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = ShoppingListSchema
