import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from "../constants/authenticationConstants";

const initialState = {
  role: "guest",
  name: "Guest",
  access_token: null,
  refresh_token: null
};

const autenticationTypes = {
  [AUTHENTICATED]: (newState, data) => {
    newState.name = data.customer_name
      ? data.customer_name
      : data.admin_name
      ? data.admin_name
      : "Guest";
    newState.role =
      // data.message === "Welcome admin" ? "admin" : "registeredUser";
      newState.role =
        data.message === "Welcome admin"
          ? "admin"
          : data.message === "Welcome guest!"
          ? "guest"
          : "registeredUser";
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    return newState;
  },
  [UNAUTHENTICATED]: newState => {
    newState.access_token = null;
    newState.refresh_token = null;
    return newState;
  },
  [AUTHENTICATION_ERROR]: () => alert("Error in authentication request")
};

export default function authenticationReducer(
  state = initialState,
  { type, auth }
) {
  if (autenticationTypes.hasOwnProperty(type)) {
    return autenticationTypes[type]({ ...state }, auth.data);
  } else {
    return state;
  }
}
