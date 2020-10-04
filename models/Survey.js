const mongoose = require('mongoose')
const recipientSchema = require('./Recipient')

const surveySchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  createdAt: Date,
  lastResponded: Date
})

module.exports = Survey = mongoose.model('surveys', surveySchema)
