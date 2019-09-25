import axios from '../hoc/axios'

export const AUTHENTICATED        = 'authenticated_user'
export const UNAUTHENTICATED      = 'unauthenticated_user'
export const AUTHENTICATION_ERROR = 'authentication_error'

export default function authAction (auth) {
  return {
    type: 'authenticated_user',
    auth: auth
  }
}

export function fetchAuth(data) {
  return async function(dispatch) {
    try {
      const response = await axios.put('admin/management/', data, { headers: {'Content-Type': 'application/json' } })
      // dispatch({ type: AUTHENTICATED})
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.access_token)
        // .then(response => console.log(response.json()),
        //   error => console.log('An error accurred', error))
        // .then(json => dispatch(authAction(json.data)))
    } catch (e) {
      console.log(e)
    }
  }
}
