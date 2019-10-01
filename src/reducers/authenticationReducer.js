import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from "../constants/authenticationConstants";

const initialState = {
  role: "external",
  name: "John Smith",
};

export default function authenticationReducer(state = initialState, auth) {
  let newState = {...state}
  switch (auth.type) {
    case AUTHENTICATED:
      // newState.role = "registeredUser"
      console.log(auth.auth.data.access_token)
      localStorage.setItem('token', auth.auth.data.access_token)
      break
    case UNAUTHENTICATED:
      break
    case AUTHENTICATION_ERROR:
      break
    default:
      return state;
  }
  return newState
}
