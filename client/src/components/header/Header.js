import React, { Fragment } from 'react'
import { logout } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Payments from '../payments/Payments'

const Header = ({ auth, logout, history }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href='/auth/google'>Se connecter avec Google</a>
          </li>
        )
      default:
        return (
          <Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>Crédits: {auth.credits}</li>
            <li onClick={() => logout(history)}>
              <a href='#!'>Se déconnecter</a>
            </li>
          </Fragment>
        )
    }
  }

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link to={!auth ? '/' : '/surveys'} className='brand-logo left'>
            Emaily
          </Link>
          <ul className='right'>{renderContent()}</ul>
        </div>
      </div>
    </nav>
  )
}

const mapState = state => ({
  auth: state.auth
})

export default withRouter(connect(mapState, { logout })(Header))
