const auth = require('../middlewares/auth')
const requireCredits = require('../middlewares/requireCredits')
const Survey = require('../models/Survey')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')

module.exports = app => {
  app.get('/api/surveys', auth, async (req, res) => {
    try {
      const surveys = await Survey.find({ _user: req.user.id }).select('-recipients')
      res.send(surveys)
    } catch (err) {
      console.log(err.message)
      return res.status(500).send({ error: 'Erreur serveur' })
    }
  })

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Merci pour votre retour!')
  })

  app.post('/api/surveys', auth, requireCredits, async (req, res) => {
    try {
      const { title, subject, body, recipients } = req.body

      const survey = new Survey({
        _user: req.user.id,
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({
          email: email.trim()
        })),
        createdAt: Date.now()
      })

      // Send email
      const mailer = new Mailer(survey, surveyTemplate(survey))
      await mailer.send()

      // Save survey and user
      await survey.save()
      req.user.credits -= 1
      const user = await req.user.save()
      return res.send(user)
    } catch (err) {
      console.log(err.message)
      return res.status(500).send({ error: 'Erreur serveur' })
    }
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    _.chain(req.body)
      .map(({ url, email }) => {
        const pathname = new URL(url).pathname
        const p = new Path('/api/surveys/:surveyId/:choice')
        const match = p.test(pathname)
        if (match) {
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice
          }
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {
                email,
                responded: false
              }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        ).exec()
      })
      .value()

    res.send({})
  })
}
