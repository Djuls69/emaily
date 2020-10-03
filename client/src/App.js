import React, { Fragment, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { fetchUser } from './redux/actions/userActions'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import Landing from './components/landing/Landing'

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={() => <h2>Dahsboard</h2>} />
          <Route exact path='/surveys/new' component={() => <h2>Survey New</h2>} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default connect(null, { fetchUser })(App)
