import { useEffect, useRef, useState } from 'react'
import AuthBox from '../../components/auth-box/AuthBox'
import AuthPopIn from '../../components/AuthPopIn'
import { RecoverFlow, useAuth } from 'magicauth-client'

const RecoverAccountPage = () => {
    const magic = useAuth()
    const initialized = useRef(false)
    const [ email, setEmail ] = useState('')

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true

        magic.flows().startFlow(new RecoverFlow())
    })

    const onClick = () => {
        const flow = magic.flows().getFlow(RecoverFlow)
        if(!flow) {
            return
        }

        flow.email({ email })
    }

    return (
        <AuthPopIn key='step0'>
            <AuthBox 
                title="ELFELEJTETT JELSZÓ"
                inputs={[
                    {
                        type: 'email',
                        placeholder: 'email',
                        onChange: setEmail
                    }
                ]}
                button="küldés"
                onDone={ onClick }
                links={[
                    {
                        url: '/',
                        name: 'bejelentkezés'
                    },
                    {
                        url: '/register',
                        name: 'regisztráció'
                    }
                ]}
            />
        </AuthPopIn>
        
    )
}

export default RecoverAccountPage