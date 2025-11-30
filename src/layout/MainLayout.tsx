import { Outlet, useLocation, useNavigate } from 'react-router'
import './main-layout.scss'
import Sidebar from '../components/sidebar/Sidebar'
import PopupElement from '../popup/PopupElement'
import { Obj, useAuth } from 'magicauth-client'

import logout from '../assets/img/logout.png'

const MainLayout = () => {
    const magic = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const titles: Obj<string> = {

        '/': '',
        '/services': 'Szolgáltatások',
        '/yourservices': 'Szervereid',
        '/manage': 'Szervereid > Kezelés',
        '/settings': 'Beállítások'

    }
    const title = titles[ location.pathname ]

    const logoutClick = () => {
        magic.auth().logout()
        navigate('/')
    }
    
    return (
        <div className='main-layout'>
            <div className="main-layout_sidebar">
                <Sidebar />
            </div>
            <div className="main-layout_container">
                <div className="main-layout_topbar">
                    <h1>{ title }</h1>
                    <div className="main-layout_topbar_profile">
                        <div className="text">
                            <h6>PROFIL</h6>
                            <h5>kbence0429</h5>
                        </div>
                        <div className="image"></div>
                        <img src={ logout } alt="logout" className='logout' onClick={ logoutClick } />
                    </div>
                </div>
                <div className="main-layout_content" key={ location.pathname }>
                    <Outlet />
                </div>
            </div>
            <PopupElement />
        </div>
    )
}

export default MainLayout