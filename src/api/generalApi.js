import { request } from '../hoc/axios'

const rest = {
    "post": (config, values) => {
        return request().post(config.url, values)
    },
    "get": (config, values) => {
        return request().get(config.url, values)
    },
    "delete": (config, values) => {
        return request().get(config.url, values)
    },
    "put": (config, values) => {
        return request().get(config.url, values)
    }
}

export function makeRequest(config, data) {
    return async function(dispatch) {
        try {
          await rest[config.method](config, data).then(
            response => {
              console.log("Response", response)
              if(response.status === 200) {
                dispatch(config.actionSuccessful(response))
              } else {
                dispatch(config.actionError(response))
              }
            },
            error => console.log('An error accurred', error))
        } catch (e) {
          console.log(e)
        }
      
    }
}