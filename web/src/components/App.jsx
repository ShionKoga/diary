import Diaries from './Diaries'
import LoginForm from './LoginForm'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Welcome from './Welcome'

export default function AppContent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/login" element={<LoginForm />}/>
                    <Route path="/diaries" element={<Diaries/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}