import { Route, Routes } from "react-router"
import AuthLayout from "./layout/AuthLayout"
import LoginPage from "./pages/auth/LoginPage"
import './assets/scss/App.scss'
import RegisterUserPage from "./pages/auth/RegisterUserPage"
import RecoverAccountPage from "./pages/auth/RecoverAccountPage"
import TFALoginPage from "./pages/auth/TFALoginPage"
import MainLayout from "./layout/MainLayout"
import YourServicesPage from "./pages/YourServicesPage"
import ServicesPage from "./pages/ServicesPage"
import SettingsPage from "./pages/SettingsPage"
import ManagePage from "./pages/ManagePage"
import MainPage from "./pages/MainPage"
import { useAuth } from 'magicauth-client'
import { useEffect } from "react"
import TicketPage from "./pages/auth/TicketPage"
import Toaster from "./app/util/Toaster"
import RecoverPasswordPage from "./pages/auth/RecoverPasswordPage"
import CaptchaPage from "./pages/auth/CaptchaPage"

const App = () => {
    const auth = useAuth()

    useEffect(() => {
        if(auth.error) {
            const error = auth.error
            Toaster.toastError(error)
        }
    }, [ auth ])

    if(!auth.isAuthenticated)
    return (
        <Routes>
            <Route path="/" element={ <AuthLayout /> }>
                <Route path="/" element={ <LoginPage /> } />
                <Route path="/register" element={ <RegisterUserPage /> } />
                <Route path="/recover" element={ <RecoverAccountPage /> } />
                <Route path="/recover/password" element={ <RecoverPasswordPage /> } />
                <Route path="/login/2fa" element={ <TFALoginPage /> } />
                <Route path="/ticket" element={ <TicketPage /> } />
                <Route path="/captcha" element={ <CaptchaPage /> } />
            </Route>
        </Routes>
    )

    return (
        <Routes>
            <Route path="/" element={ <MainLayout /> }>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/yourservices" element={ <YourServicesPage /> } />
                <Route path="/services" element={ <ServicesPage /> } />
                <Route path="/settings" element={ <SettingsPage /> } />
                <Route path="/manage" element={ <ManagePage /> } />
            </Route>
        </Routes>
    )
}

export default App
