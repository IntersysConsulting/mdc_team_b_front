import axios from 'axios';

const getProducts = () => {
    return axios.get("").then(response => {
        response.data
    }).catch( error => {
        error.response
    })
}

export const cartAPI = {
    getProducts
}
