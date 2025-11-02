import './auth-layout.scss'
import logo from '../assets/img/sharknode_logo.png'
import { Outlet } from 'react-router'
import { TailSpin } from 'react-loader-spinner'

type LayoutProps = {

    loading?: boolean
    
}

const AuthLayout = (props: LayoutProps) => {
    return (
        <div className='auth-layout'>
            <div className="auth-layout_logo">
                <img src={ logo } alt="logo" />
            </div>
            <div className="auth-layout_content">
                {
                    props.loading ?
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