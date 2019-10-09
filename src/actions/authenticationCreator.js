import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from "../constants/authenticationConstants";
import axios from '../hoc/axios'


export function authenticatedAction(auth) {
  return {
    type: AUTHENTICATED,
    auth: auth
  }
}

export function unauthenticatedAction(auth) {
  return {
    type: UNAUTHENTICATED,
    auth: auth
  }
}

export function authentication_error(auth) {
  return {
    type: AUTHENTICATION_ERROR,
    auth: auth
  }
}

function fetchToken(data) {
  console.log('function fetchToken')
  return axios.post('session/', data, { headers: {'Content-Type': 'multipart/form-data' } })
  // const dataJson = JSON.stringify(data)
  // return axios.post('session/', dataJson, { headers: {'Content-Type': 'application/json' } })
}

export function login(data) {
    console.log('function login')
  return async function(dispatch) {
    try {
      await fetchToken(data).then(
        response => {
          if(response.status === 200) {
            dispatch(authenticatedAction(response))
          } else {
            dispatch( authentication_error(response))
          }
        },
        error => console.log('An error accurred', error))
    } catch (e) {
      console.log(e)
    }
  }
}
