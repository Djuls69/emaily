import React from 'react'
import { handleToken } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const Payments = ({ handleToken }) => {
  return (
    <StripeCheckout
      name='Emaily'
      description='5,00€ pour 5 crédits'
      amount={500}
      currency='EUR'
      allowRememberMe={false}
      token={token => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
    >
      <button className='btn'>Ajouter du crédit</button>
    </StripeCheckout>
  )
}

export default connect(null, { handleToken })(Payments)
