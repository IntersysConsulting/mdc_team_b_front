import axios from 'axios';

const getOrderInfo = () => {
    return axios.get(process.env.REACT_APP_API_URL+'/checkout', {headers:{authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzA1NzE3MTksIm5iZiI6MTU3MDU3MTcxOSwianRpIjoiZjM2M2IyMDgtZDBiMi00ZTZiLTk4ZjYtMjI1YzE5YWE4ODM0IiwiZXhwIjoxNTcwNjU4MTE5LCJpZGVudGl0eSI6IjVkOTI3MTVlYThkMzk4OTEzYTE5ZmNmNyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.-HKn8TdjB2CGOxeX8Qr5girwbZVwpazCfKKP9GCJudk'}}).then((response) => {
        return response
        }).catch( (error) => {
        return error
        });
};

export const checkoutOrderApi = {
    getOrderInfo,
};