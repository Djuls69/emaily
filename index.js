const express = require('express')
const passport = require('passport')
require('./services/passport')
require('./config/db')()
const cookieSession = require('cookie-session')
const config = require('config')

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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server started ...'))
