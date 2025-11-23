import './auth-layout.scss'
import logo from '../assets/img/sharknode_logo.png'
import { Outlet } from 'react-router'
import { TailSpin } from 'react-loader-spinner'
import { useAuth } from 'magicauth-client'

type LayoutProps = {

    loading?: boolean
    
}

const AuthLayout = (props: LayoutProps) => {
    const magic = useAuth()

    if(magic.fatal) {
        return (
            <div className='auth-layout'>
                <div className="auth-layout_logo">
                    <img src={ logo } alt="logo" />
                </div>
                <div className="auth-layout_content">
                    <h5>Please try again later.</h5>
                </div>
            </div>
        )
    }

    return (
        <div className='auth-layout'>
            <div className="auth-layout_logo">
                <img src={ logo } alt="logo" />
            </div>
            <div className="auth-layout_content">
                {
                    magic.isLoading ?
                        <TailSpin
                            width="45"
                            color="white"
                        />
                    : 
                        <Outlet />
                }
            </div>
        </div>
    )
}

export default AuthLayout