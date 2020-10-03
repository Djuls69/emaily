const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
const config = require('config')
const clientID = config.get('googleClientId')
const clientSecret = config.get('googleClientSecret')
const User = require('../models/User')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          done(null, existingUser)
        } else {
          const user = new User({ googleId: profile.id })
          await user.save()
          done(null, user)
        }
      } catch (err) {
        console.log(err.message)
      }
    }
  )
)
