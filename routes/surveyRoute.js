const auth = require('../middlewares/auth')
const requireCredits = require('../middlewares/requireCredits')
const Survey = require('../models/Survey')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

module.exports = app => {
  app.get('/api/surveys/feedback', (req, res) => {
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
}
