import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

async function getAuth(user, pass) {
    const config = {auth: {username: user, password: pass}}
    return await axios.get("/api/auth", config)
}

function useAuth(user, pass) {
    const navigate = useNavigate()
    const [status, setStatus] = useState()
    useEffect(() => {
        getAuth(user, pass)
            .then(res => {
                setStatus(res.status)
                navigate('main')
            })
            .catch(err => {
                setStatus(err.response.status)
                navigate('/')
            })
    }, [])
    return status
}

export default function PrivateRouteMain() {
    const { state } = useLocation()
    useAuth(state['user'], state['pass'])
}