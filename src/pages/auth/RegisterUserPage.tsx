import { useAuth } from 'magicauth-client'
import AuthBox from '../../components/auth-box/AuthBox'
import { useEffect, useRef, useState } from 'react'
import AuthSlideIn from '../../components/AuthSlideIn'
import AuthPopIn from '../../components/AuthPopIn'

const RegisterUserPage = () => {
    const magic = useAuth()
    const authManager = magic.auth()

    const initialized = useRef(false)
    const [ state, setState ] = useState(0)

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')

    const [ password, setPassword ] = useState('')
    const [ password1, setPassword1 ] = useState('')

    const [ legalConsent, setLegalConsent ] = useState(true)
    const [ marketingConsent, setMarketingConsent ] = useState(true)

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true

        if(state !== 0) {
            return
        }
        console.log('initializing register flow')

        authManager.startRegisterSession()
    })

    const completeState = () => {
        switch(state) {

            case 0:
                authManager.registerSession.saveState(0, {

                    username,
                    email
                    
                })
                break

            case 1:
                authManager.registerSession.saveState(1, {

                    password,
                    password_again: password1
                    
                })
                break

            case 2: 
                authManager.registerSession.saveState(2, {

                    legal_consent: legalConsent,
                    marketing_consent: marketingConsent

                })
                break

        }

        if(state === 2) {
            authManager.registerSession.buildAndExecute()
        }

        setState(state + 1)
    }

    if(state === 0)
    return (
        <AuthPopIn key='step0'>
            <AuthBox 
                title="REGISZTRÁCIÓ"
                inputs={[
                    {
                        type: 'text',
                        placeholder: 'felhasználónév',
                        onChange: setUsername
                    },
                    {
                        type: 'email',
                        placeholder: 'email cím',
                        onChange: setEmail
                    }
                ]}
                button="kovetkező"
                onDone={ completeState }
                links={[
                    {
                        url: '/',
                        name: 'bejelentkezés'
                    }
                ]}
            />
        </AuthPopIn>
    )

    if(state === 1)
    return (
        <AuthSlideIn key='step1'>
            <AuthBox 
                key='step2'
                title="REGISZTRÁCIÓ"
                inputs={[
                    {
                        type: 'password',
                        placeholder: 'jelszó',
                        onChange: setPassword
                    },
                    {
                        type: 'password',
                        placeholder: 'jelszó újra',
                        onChange: setPassword1
                    }
                ]}
                button="kovetkező"
                onDone={ completeState }
                links={[
                    {
                        url: '/',
                        name: 'bejelentkezés'
                    }
                ]}
            />
        </AuthSlideIn>
    )

    if(state === 2)
    return (
        <AuthSlideIn key='step2'>
            <AuthBox 
                key='step2'
                title="REGISZTRÁCIÓ"
                inputs={[
                    {
                        type: 'password',
                        placeholder: 'jelszo'
                    },
                    {
                        type: 'password',
                        placeholder: 'jelszo ujra'
                    }
                ]}
                button="regisztráció"
                onDone={ completeState }
                links={[
                    {
                        url: '/',
                        name: 'bejelentkezés'
                    }
                ]}
            />
        </AuthSlideIn>
    )
}

export default RegisterUserPage