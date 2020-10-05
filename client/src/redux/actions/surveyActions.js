import axios from 'axios'
import { FETCH_USER } from '../types'

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
