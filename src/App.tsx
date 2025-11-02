import { Route, Routes } from "react-router"
import AuthLayout from "./layout/AuthLayout"
import LoginPage from "./pages/LoginPage"
import './assets/scss/App.scss'
import RegisterUserPage from "./pages/RegisterUserPage"
import RegisterPasswordPage from "./pages/RegisterPasswordPage"
import RecoverAccountPage from "./pages/RecoverAccountPage"
import TFALoginPage from "./pages/TFALoginPage"
import MainLayout from "./layout/MainLayout"
import YourServicesPage from "./pages/YourServicesPage"
import ServicesPage from "./pages/ServicesPage"
import SettingsPage from "./pages/SettingsPage"
import ManagePage from "./pages/ManagePage"

const App = () => {
    if(false)
    return (
        <Routes>
            <Route path="/" element={ <AuthLayout /> }>
                <Route path="/" element={ <LoginPage /> } />
                <Route path="/register" element={ <RegisterUserPage /> } />
                <Route path="/register/complete" element={ <RegisterPasswordPage /> } />
                <Route path="/recover" element={ <RecoverAccountPage /> } />
                <Route path="/recover/password" element={ <RegisterUserPage /> } />
                <Route path="/login/2fa" element={ <TFALoginPage /> } />
            </Route>
        </Routes>
    )

    return (
        <Routes>
            <Route path="/" element={ <MainLayout /> }>
                <Route path="/yourservices" element={ <YourServicesPage /> } />
                <Route path="/services" element={ <ServicesPage /> } />
                <Route path="/settings" element={ <SettingsPage /> } />
                <Route path="/manage" element={ <ManagePage /> } />
            </Route>
        </Routes>
    )
}

export default App
