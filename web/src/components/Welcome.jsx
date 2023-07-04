import {useNavigate} from 'react-router-dom'

export default function Welcome() {
    const navigate = useNavigate()

    const showLoginView = () => {
        navigate("/login")
    }

    return (
        <>
            <h1>Welcome</h1>
            <p>Login to see your diary</p>
            <button onClick={showLoginView}>
                Login
            </button>
        </>
    )
}