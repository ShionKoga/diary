import {Outlet} from 'react-router-dom'
import Header from './Header'


export default function Main() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}