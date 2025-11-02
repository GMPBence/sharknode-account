import { Outlet } from 'react-router'
import './main-layout.scss'
import Sidebar from '../components/sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className="main-layout_sidebar">
                <Sidebar />
            </div>
            <div className="main-layout_container">
                <div className="main-layout_topbar">
                    <h1>Szolgaltatasok</h1>
                    <div className="main-layout_topbar_profile">
                        <div className="text">
                            <h6>PROFIL</h6>
                            <h5>kbence0429</h5>
                        </div>
                        <div className="image"></div>
                    </div>
                </div>
                <div className="main-layout_content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout