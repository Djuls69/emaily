import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Landing = ({ auth }) => {
  if (auth) return <Redirect to='/surveys' />
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily</h1>
      <div style={{ marginTop: 200, fontSize: 18, borderRadius: 10 }} className='card horizontal'>
        <div className='card-stacked'>
          <div className='card-content'>
            <p>
              Emaily est une application simple, qui vous permet d'envoyer à vos utilisateur un email, une enquête de
              satisfaction, et d'enregistrer son opinion.
              <br /> Afin de créer une enquête, vous devez au préalable vous identifier avec Google, puis ajouter du
              crédit avec Stripe.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = ({ auth }) => ({ auth })

export default connect(mapState)(Landing)
