import axios from '../hoc/axios'
import {log} from 'util'

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

      const jsonData = JSON.stringify(data)
      return await axios.put('admin/management/', jsonData)
        .then(response => response.json(),
          error => console.log('An error accurred', error))
        .then(json => dispatch(authAction(json.data)))
    } catch (e) {
      console.log(e)
    }
  }
}
