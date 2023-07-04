import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import PrivateRouteMain from './PrivateRouteMain'
import Main from './Main'
import Page1 from './Page1'
import Page2 from './Page2'


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/auth" element={<PrivateRouteMain />} />
                    <Route path="/main" element={<Main />}>
                        <Route path="/main/page1" element={<Page1 />} />
                        <Route path="/main/page2" element={<Page2 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
