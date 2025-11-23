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

    const back = () => magic.flows().endFlow()

    return (
        <AuthPopIn key='step0'>
            <AuthBox 
                title="ELFELEJTETT JELSZO"
                inputs={[
                    {
                        type: 'email',
                        placeholder: 'email',
                        onChange: setEmail
                    }
                ]}
                button="kuldes"
                onDone={ onClick }
                links={[
                    {
                        url: '/',
                        name: 'bejelentkezes'
                    },
                    {
                        url: '/register',
                        name: 'regisztracio'
                    }
                ]}
            />
        </AuthPopIn>
        
    )
}

export default RecoverAccountPage