import React, { Fragment, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { fetchUser } from './redux/actions/userActions'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'
import SurveyNew from './components/surveys/SurveyNew'

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
          <Route exact path='/surveys' component={Dashboard} />
          <Route exact path='/surveys/new' component={SurveyNew} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default connect(null, { fetchUser })(App)
