import { FETCH_USER, LOGOUT_USER } from '../types'

const init_state = null

const authReducer = (state = init_state, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_USER:
      return payload || false
    case LOGOUT_USER:
      return false
    default:
      return state
  }
}

export default authReducer
