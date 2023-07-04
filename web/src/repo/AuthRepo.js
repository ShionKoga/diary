import axios from 'axios'

export default class AuthRepo {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8080'
        axios.defaults.headers.post['Content-Type'] = 'application/json'
    }

    async login(username, password) {
        const response = await axios({
            method: 'POST',
            url: '/api/login',
            data: {
                name: username,
                password: password
            }
        })
        const data = response.data
        this.setToken(data.token)
        return data.token
    }

    async register(username, password) {
        const response = await axios({
            method: 'POST',
            url: '/api/register',
            data: {
                name: username,
                password: password
            }
        })
        const data = response.data
        this.setToken(data.token)
        return data.token
    }

    setToken(token) {
        window.localStorage.setItem('auth_token', token)
    }
}