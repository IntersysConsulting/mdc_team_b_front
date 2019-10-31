import {
  request,
  requestRefreshUser,
  requestRefreshAdmin
} from '../hoc/axios'
import { refresh_token } from "../actions/authenticationCreator"

const rest = {
  "post": ({url, data}) => {
    return request().post(url, data)
  },
  "get": ({url, data}) => {
    if(data) {
      return request().get(url, data)
    } else {
     return request().get(url, data)
    }
  },
  "delete": ({url, data}) => {
    return request().delete(url, {data:data})
  },
  "put": ({url, data}) => {
    return request().put(url, data)
  },
  "refresh": () => {
    return request()
  },
}

const doDispatch = (dispatch, options, response, error=false ) => {
  if ( error && response.status === 401 ){
    if (options.role === "admin" ) {
      requestRefreshAdmin().then(res => dispatch(refresh_token(res)))
    } else {
      requestRefreshUser().then(res => dispatch(refresh_token(res)))
    }
  } else {
    if(response.data.statusCode === 200) {
      if(options.method === "get") {
        dispatch(options.actionSuccessful(response))
      } else {
        dispatch(options.actionSuccessful(options))
      }
    }
  }
}

export function makeRequest(options) {
    return async function(dispatch) {
        try {
            await rest[options.method](options).then(
                res => doDispatch(dispatch,options, res),
                error => doDispatch(dispatch,options, error.response, true)
            )
        } catch (e) {
          console.log(e)
        }
    }
}