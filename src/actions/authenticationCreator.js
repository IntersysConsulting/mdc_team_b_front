import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SAVE_USER,
  VALIDATE_AUTHENTICATION
} from "../constants/authenticationConstants";

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

export function validate_authentication(auth) {
  return {
    type: VALIDATE_AUTHENTICATION,
    auth: auth
  }
}

export function save_user(auth) {
  return {
    type: SAVE_USER,
    auth: auth 
  }
}