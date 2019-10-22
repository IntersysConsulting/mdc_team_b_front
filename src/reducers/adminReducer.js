import {
  CREATE_ADMIN,
  READ_ADMIN,
  UPDATE_ADMIN,
  DELETE_ADMIN,
  READ_ADMINS,
  ERROR_ADMIN
} from "../constants/adminConstants";
  
const initialState = {
  admins: []
};

const adminTypes = {
  [CREATE_ADMIN]: (_, data) => alert(data.message),
  [READ_ADMIN]:  (_, data) => alert("read_admin"),
  [UPDATE_ADMIN]: (_, data) => alert("upadate"),
  [DELETE_ADMIN]: (newState, data) => {
    return newState
  },
  [READ_ADMINS]:  (newState, data) => {
    newState.admins = [...data.data]
    return newState;
  },
  [ERROR_ADMIN]: (_, data) => alert("error")
};

export default function adminReducer(
  state = initialState,
  { type, admins }
) {
  if (adminTypes.hasOwnProperty(type)) {
    return adminTypes[type]({ ...state }, admins.data);
  } else {
    return state;
  }
}
