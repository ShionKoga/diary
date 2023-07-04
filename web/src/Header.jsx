import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to="/main/page1">page1</Link>
            <Link to="/main/page2">page2</Link>
        </div>
    )
}