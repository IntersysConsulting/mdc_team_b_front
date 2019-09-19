import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from '../actions/authenticationCreator.jsx'

export default function authReducer(state = {}, auth) {
  switch(auth.type) {
    case AUTHENTICATED:
      // if(auth.code) {
      //   const res = axios.post(`${URL}/admin/management/${auth.email}/${auth.code}`)
      //   localStorage.setItem('token', res.data.token)
      // } else {
      //   const res = axios.post(`${URL}/admin/management/${auth.email}/${auth.password}`)
      //   localStorage.setItem('token', res.data.token)
      // }
      // window.history.push('/')
      return { ...state, authenticated: true }
    case UNAUTHENTICATED:
      return { ...state, authenticated: false }
    case AUTHENTICATION_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
