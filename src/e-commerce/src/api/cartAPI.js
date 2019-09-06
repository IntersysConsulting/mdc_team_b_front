import axios from 'axios';

const getProducts = () => {
    return axios.get("").then(response => {
        return response.data
    }).catch( error => {
        return error.response
    })
}

export const cartAPI = {
    getProducts
}
