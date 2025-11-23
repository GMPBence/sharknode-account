import { RecoverFlow, useAuth } from 'magicauth-client'
import AuthBox from '../../components/auth-box/AuthBox'
import { useEffect, useRef, useState } from 'react'
import AuthSlideIn from '../../components/AuthSlideIn'

const RecoverPasswordPage = () => {
    const magic = useAuth()
    const initialized = useRef(false)
    const [ shouldContinue, setShouldContinue ] = useState(false)

    const [ password, setPassword ] = useState('')
    const [ password1, setPassword1 ] = useState('')

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true

        const flow = magic.flows().getGenericFlow()

        if(!flow) {
            return
        }

        console.log(flow.state.getCurrent())
        if(flow instanceof RecoverFlow && flow.state.getCurrent() === 'code') {
            setShouldContinue(true)
        }
    })

    const onClick = () => {
        const flow = magic.flows().getFlow(RecoverFlow)

        if(!flow) {
            return
        }

        flow.password({
            password,
            password_again: password1
        })
    }

    if(!shouldContinue) {
        return(
            <h1>invalid state</h1>
        )
    }

    return (
        <AuthSlideIn key='step0'>
            <AuthBox 
                title="ELFELEJTETT JELSZO"
                inputs={[
                    {
                        type: 'password',
                        placeholder: 'jelszo',
                        onChange: setPassword
                    },
                    {
                        type: 'password',
                        placeholder: 'jelszo ujra',
                        onChange: setPassword1
                    }
                ]}
                button="mentes"
                onDone={ onClick }
                links={[ ]}
            />
        </AuthSlideIn>
    )
}

export default RecoverPasswordPage