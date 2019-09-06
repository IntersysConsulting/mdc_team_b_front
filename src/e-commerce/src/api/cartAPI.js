import axios from 'axios';

const getProducts = () => {    
    return new Promise( (resolve, reject) => {
        axios.get("").then(response => {
            resolve(response)
        }).catch( error => {
            reject(error)
        })
    })
}

export const cartAPI = {
    getProducts
}
