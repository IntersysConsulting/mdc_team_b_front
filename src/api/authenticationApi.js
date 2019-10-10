import {
    authenticatedAction,
    unauthenticatedAction,
    authentication_error,
    validate_authentication
} from '../actions/authenticationCreator'
import { request } from '../hoc/axios'

function fetchToken(data, admin) {
  if(admin) {
    return request().post('admin/session/', data)
  } else {
    return request().post('session/', data)
  }
}
  
export function login(data, admin = false) {
    return async function(dispatch) {
      try {
        await fetchToken(data, admin).then(
          response => {
            if(response.data.statusCode === 200) {
              dispatch(authenticatedAction(response))
              return true
            } else {
              dispatch(authentication_error(response))
            }
          },
          error => console.log('An error ocurred', error))
      } catch (e) {
        console.log(e)
      }
    }
}

function deleteToken(admin) {
  if(admin === "admin") {
    return request().delete('admin/session/')
  } else {
    return request().delete('session/')
  }
}

export function logoutApi(admin = false) {
  return async function(dispatch) {
    try {
      await deleteToken(admin).then(
        response => {
          if(response.status === 200) {
            dispatch(unauthenticatedAction(response))
          } else {
            dispatch(authentication_error(response))
          }
        },
        error => console.log('An error accurred', error))
    } catch (e) {
      console.log(e)
    }
  }
}

export function validateAuthentication() {
  return async function(dispatch) {
    try {
      await request().get("identity/").then(
        response => {
          if(response.status === 200) {
            dispatch(validate_authentication(response))
          } else {
            dispatch(authentication_error(response))
          }
        },
        error => console.log('An error accurred', error))
    } catch (e) {
      console.log(e)
    }
  } 
} 