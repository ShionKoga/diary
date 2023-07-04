import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({name: '', pass: ''})

    const onClickSubmit = () => {
        navigate(
            '/auth',
            {state: {user: form.name, pass: form.pass}, replace: true}
        )
    }

    return (
        <div>
            <h2>ログイン</h2>
            USER
            <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
            />
            PASSWORD
            <input
                type="text"
                value={form.pass}
                onChange={(e) => setForm({...form, pass: e.target.value})}
            />
            <button onClick={onClickSubmit}>送信</button>
        </div>
    )
}