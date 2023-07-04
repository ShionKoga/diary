import axios from 'axios'

export default class DiaryRepo {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8080'
        axios.defaults.headers.post['Content-Type'] = 'application/json'
    }

    async fetchDiaries() {
        let headers = {}
        const maybeToken = this.getAuthToken()
        if (maybeToken !== null && maybeToken !== 'null') {
            headers = {'Authorization': `Bearer ${maybeToken}`}
        }

        const response = await axios({
            method: 'GET',
            url: '/api/diaries',
            headers: headers,
        })
        return response.data
    }

    async postDiary(title, body) {
        let headers = {}
        const maybeToken = this.getAuthToken()
        if (maybeToken !== null && maybeToken !== 'null') {
            headers = {'Authorization': `Bearer ${maybeToken}`}
        }

        const response = await axios({
            method: 'POST',
            url: '/api/diaries',
            headers: headers,
            data: {title, body}
        })
        return response.data
    }

    getAuthToken() {
        return window.localStorage.getItem('auth_token')
    }
}