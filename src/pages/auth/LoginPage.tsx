import { useState } from "react"
import AuthBox from "../../components/auth-box/AuthBox"
import { useAuth } from "magicauth-client"
import type LoginData from "magicauth-client/dist/actions/data/action/LoginData"
import AuthPopIn from "../../components/AuthPopIn"

const LoginPage = () => {
    const magic = useAuth()
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const doLogin = async () => {
        const data: LoginData = {
            username,
            password
        }

        console.log(magic)
        await magic.auth().loginUser(data)
    }

    return (
        <AuthPopIn key="step0">
            <AuthBox 
                title="BEJELENTKEZÉS"
                inputs={[
                    {
                        type: 'text',
                        placeholder: 'felhasználónév',
                        onChange: setUsername
                    },
                    {
                        type: 'password',
                        placeholder: 'jelszó',
                        onChange: setPassword
                    }
                ]}
                button="bejelentkezés"
                onDone={ doLogin }
                links={[
                    {
                        url: '/register',
                        name: 'regisztráció'
                    },
                    {
                        url: '/recover',
                        name: 'elfelejtett jelszó'
                    }
                ]}
            />
        </AuthPopIn>
    )
}

export default LoginPage