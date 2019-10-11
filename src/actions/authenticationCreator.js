import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
<<<<<<< HEAD
  SAVE_USER,
=======
>>>>>>> 74955971410d2ddbebd1ea1e232cef8e4061ef13
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

<<<<<<< HEAD
export function save_user(auth) {
  return {
    type: SAVE_USER,
    auth: auth 
  }
}

=======
>>>>>>> 74955971410d2ddbebd1ea1e232cef8e4061ef13
export function validate_authentication(auth) {
  return {
    type: VALIDATE_AUTHENTICATION,
    auth: auth
  }
}