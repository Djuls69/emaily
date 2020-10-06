import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from '../reducers/authReducer'
import surveys from './surveysReducer'

const rootReducer = combineReducers({
  auth,
  surveys,
  form: formReducer
})

export default rootReducer
