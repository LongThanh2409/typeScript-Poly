
import axios from "axios"
const { accessToken } = JSON.parse(localStorage.getItem('user') || '{}');
const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {

        "Authorization": `${accessToken} `
    },
    timeout: 3000
})
export default instance