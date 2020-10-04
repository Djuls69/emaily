import axios from 'axios'
import { FETCH_USER, LOGOUT_USER } from '../types'

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current_user')
    dispatch({
      type: FETCH_USER,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
}

export const logout = history => async dispatch => {
  try {
    await axios.get('/api/logout')
    dispatch({
      type: LOGOUT_USER
    })
    history.push('/')
  } catch (err) {
    console.log(err.message)
  }
}

export const handleToken = token => async dispatch => {
  try {
    const res = await axios.post('/api/stripe', token)
    dispatch({
      type: FETCH_USER,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
}
