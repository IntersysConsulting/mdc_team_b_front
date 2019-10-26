import {
  request,
  requestRefreshUser,
  requestRefreshAdmin
} from '../hoc/axios'
import { refresh_token } from "../actions/authenticationCreator"


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

export function makeRequest(config) {
    return async function(dispatch) {
        try {
          await rest[config.method](config.url, config.data).then(
            response => {
              if(response.data.statusCode === 200) {
                if(config.method === "get"){
                  dispatch(config.actionSuccessful(response))
                } else {
                  dispatch(config.actionSuccessful(config))
                }
              } else {
                dispatch(config.actionError(response))
              }
            })
            .catch(error => {
                if(config.role === "admin") {
                  requestRefreshAdmin().then(response => {
                    dispatch(refresh_token(response))
                  })
                } else {
                  requestRefreshUser().then(response => {
                    dispatch(refresh_token(response))
                  })
                }
            })
            .then(response => {
              if(response.data.statusCode === 200) {
                if(config.method === "get"){
                  dispatch(config.actionSuccessful(response))
                } else {
                  dispatch(config.actionSuccessful(config))
                }
              } else {
                dispatch(config.actionError(response))
              }
            })
        } catch (e) {
          console.log(e)
        }
    }
}