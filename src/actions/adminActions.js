import {
  CREATE_ADMIN,
  UPDATE_ADMIN,
  DELETE_ADMIN,
  READ_ADMINS,
  ERROR_ADMIN
} from "../constants/adminConstants";

export function create_admin(admin) {
  return {
    type: CREATE_ADMIN,
    payload: admin
  }
}

export function update_admin(admins) {
  return {
    type: UPDATE_ADMIN,
    payload: admins
  }
}

export function delete_admin(data) {
  return {
    type: DELETE_ADMIN,
    payload: data
  }
}

export function read_admins(admins) {
  return {
    type: READ_ADMINS,
    payload: admins
  }
}

export function error_admin(error) {
  return {
    type: ERROR_ADMIN,
    error: error
  }
}