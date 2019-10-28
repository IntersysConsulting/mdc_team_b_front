import {
  request,
  requestRefreshUser,
  requestRefreshAdmin
} from '../hoc/axios'
import { refresh_token } from "../actions/authenticationCreator"
let refresh = false

const rest = {
  "post": (url, values) => {
    return request().post(url, values)
  },
  "get": (url, values) => {
    return request().get(url, values)
  },
  "delete": (url, values) => {
    return request().delete(url, {data:values})
  },
  "put": (url, values) => {
    return request().put(url, values)
  },
  "refresh": () => {
    return request()
  },
}

const doDispatch = (dispatch, config, response ) => {
  if(response.data.statusCode === 200) {
    if(config.method === "get") {
      dispatch(config.actionSuccessful(response))
    } else {
      dispatch(config.actionSuccessful(config))
    }
  } else if (response.data.statusCode === 401) {
    if(refresh === false) {
      refresh = true
      if (config.role === "admin" ) {
        requestRefreshAdmin().then(res => dispatch(refresh_token(res)))
      } else {
        requestRefreshUser().then(res => dispatch(refresh_token(res)))
      }
    }
  } else {
    dispatch(config.actionError(response))
  }
}

export function makeRequest(config) {
    return async function(dispatch) {
        try {
            await rest[config.method](config.url, config.data).then(
                res => doDispatch(dispatch,config, res),
                error => console.log(error)
            ).then(
                res => refresh ? doDispatch(dispatch,config, res) : null,
                error => console.log(error)
            )
        } catch (e) {
          console.log(e)
        }
    }
}