import axios from 'axios'

// const instance = (config) => {
//   config ?  axios.create({
//       baseURL: config.url
//     }) : axios.create({
//       baseURL: 'http://127.0.0.1:5000'
//     })
// }

const URL = 'http://127.0.0.1:5000/api/v1/'

const instance = axios.create({
  baseURL: URL,
  responseType: "json"
})

export default instance
