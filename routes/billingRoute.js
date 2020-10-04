const config = require('config')
const stripe = require('stripe')(config.get('stripeSecretKey'))
const auth = require('../middlewares/auth')

module.exports = app => {
  app.post('/api/stripe', auth, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'eur',
      description: '5,00€ pour 5 crédits',
      source: req.body.id
    })
    req.user.credits += 5
    const user = await req.user.save()
    res.json(user)
  })
}
