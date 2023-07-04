import {useState} from 'react'
import AuthRepo from '../repo/AuthRepo'
import {useNavigate} from 'react-router-dom'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const authRepo = new AuthRepo()

    const onSubmitLogin = () => {
        authRepo.login(username, password)
            .then(_ => {
                navigate('/diaries')
            })
    }

    const onSubmitRegister = () => {
        authRepo.register(username, password)
            .then(_ => {
                navigate('/diaries')
            })
    }

    return (
        <>
            <label>
                Username
                <input onChange={e => setUsername(e.target.value)}/>
            </label>

            <label>
                Password
                <input onChange={e => setPassword(e.target.value)}/>
            </label>

            <button onClick={onSubmitLogin}>Login</button>
            <button onClick={onSubmitRegister}>Register</button>
        </>
    )
}