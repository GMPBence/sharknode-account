import './sidebar.scss'

import logo from '../../assets/img/sharknode_logo.png'
import home from '../../assets/img/home.png'
import server from '../../assets/img/server.png'
import clipboard from '../../assets/img/clipboard.png'
import cog from '../../assets/img/cog.png'

import dbag from '../../assets/img/dbag.png'
import plus from '../../assets/img/plus.png'
import { Link } from 'react-router'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar_logo">
                <img src={ logo } alt="" />
            </div>
            <div className="sidebar_links">
                <Link to='/'>
                    <div className="sidebar_link">
                        <img src={ home } alt="" />
                        <h5>Fooldal</h5>
                    </div>
                </Link>

                <Link to='/services'>
                    <div className="sidebar_link">
                        <img src={ server } alt="" />
                        <h5>Szolgaltatasok</h5>
                    </div>
                </Link>

                <Link to='/yourservices'>
                    <div className="sidebar_link">
                        <img src={ clipboard } alt="" />
                        <h5>Szolgaltatasaid</h5>
                    </div>
                </Link>

                <Link to='/settings'>
                    <div className="sidebar_link">
                        <img src={ cog } alt="" />
                        <h5>Beallitasok</h5>
                    </div>
                </Link>
            </div>
            <div className="sidebar_bottom">
                <div id='amount' className="sidebar_button">
                    <img src={ dbag } alt="" />
                    <span><span id='amount'>14 </span><span id='currency'>SharkCoin</span></span>
                </div>
                <div id='buy' className="sidebar_button sidebar_button-big">
                    <img src={ plus } alt="" />
                    <h4>COIN FELTOLTES</h4>
                </div>
            </div>
        </div>
    )
}

export default Sidebar