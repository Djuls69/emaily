const mongoose = require('mongoose')
const config = require('config')

module.exports = () => {
  mongoose.connect(config.get('mongoURI'), { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
      return console.log(err.message)
    }
    console.log('Database connected')
  })
}
