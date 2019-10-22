import { request } from '../hoc/axios'

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
    }
}

export function makeRequest(config) {
    return async function(dispatch) {
        try {
          await rest[config.method](config.url, config.data).then(
            response => {
              if(response.data.statusCode === 200) {
                dispatch(config.actionSuccessful(response))
              } else {
                dispatch(config.actionError(response))
              }
            })
            .catch(error => console.log('An error accurred', error))
        } catch (e) {
          console.log(e)
        }
      
    }
}