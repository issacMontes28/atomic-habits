import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/issacMontes28/atomic-habits',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getLaws() {
        return apiClient.get('/laws')
    },
    getLaw(id) {
        return apiClient.get('/laws/' + id)
    },
}