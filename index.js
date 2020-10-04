const express = require('express')
const passport = require('passport')
require('./services/passport')
require('./config/db')()
const cookieSession = require('cookie-session')
const config = require('config')
const path = require('path')

const app = express()
app.use(express.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.get('cookieKey')]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoute')(app)
require('./routes/billingRoute')(app)
require('./routes/surveyRoute')(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'))

  // Express will serve up index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server started ...'))
