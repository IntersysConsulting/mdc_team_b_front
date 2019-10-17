import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SAVE_USER,
  VALIDATE_AUTHENTICATION
} from "../constants/authenticationConstants";

const initialState = {
  role: "guest",
  name: "Guest"
};

const autenticationTypes = {
  [AUTHENTICATED]: (newState, data) => {
    newState.name = (data.customer_name || data.admin_name || newState.name ) 
   
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
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    newState.role = "guest";
    newState.name = "Guest";
    return newState;
  },
  [SAVE_USER]: (newState, data) => {
    if(data.role === "Customer") {
      newState.role  = "registeredUser"
    }
    newState.name = data.name
    return newState;
  },
  [AUTHENTICATION_ERROR]: (_, data) => alert(data.message),
  [VALIDATE_AUTHENTICATION]: (newState, data) => {
    let role = data.role.toLowerCase();
    role = role === "customer" ? "registeredUser" : role;
    if (newState.role === role) {
      return newState;
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        role: "guest",
        name: "Guest"
      };
    }
  }
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
