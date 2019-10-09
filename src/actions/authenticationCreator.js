import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
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