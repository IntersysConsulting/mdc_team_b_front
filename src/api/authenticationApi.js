import {
    authenticatedAction,
    unauthenticatedAction,
    authentication_error
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
            if(response.status === 200) {
              dispatch(authenticatedAction(response))
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

function deleteToken(admin) {
  let access_token = localStorage.getItem('access_token')
  if(admin) {
    return request(access_token).delete('admin/session/')
  } else {
    return request(access_token).delete('session/')
  }
}

export function logout(admin = false) {
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
  