import axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS } from '../types'

export const submitSurvey = (formData, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', formData)
    dispatch({
      type: FETCH_USER,
      payload: res.data
    })
    history.push('/surveys')
  } catch (err) {
    console.log(err.message)
  }
}

export const fetchSurveys = () => async dispatch => {
  try {
    const res = await axios.get('/api/surveys')
    dispatch({
      type: FETCH_SURVEYS,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
}
