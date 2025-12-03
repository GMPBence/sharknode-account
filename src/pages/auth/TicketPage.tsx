import { CodeFlow, useAuth } from 'magicauth-client'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import AuthPopIn from '../../components/AuthPopIn'
import AuthBox from '../../components/auth-box/AuthBox'
import AuthSlideIn from '../../components/AuthSlideIn'

const TicketPage = () => {
    const flowHolder = useAuth().flows()

    const location = useLocation()
    const initialized = useRef(false)

    const [ type, setType ] = useState('undef')
    const [ code, setCode ] = useState('')

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true

        const flow = flowHolder.getGenericFlow()
        if(!flow) {
            return
        }
        if(!(flow instanceof CodeFlow)) {
            return
        }

        const flowType = new URLSearchParams(location.search).get('type')

        if(flowType == null) {
            return
        }

        setType(flowType)
    }, [ flowHolder, location.search ])

    const onClick = () => {
        const flow = flowHolder.getGenericFlow() as CodeFlow        
        flow.code({ code })
    }

    const back = () => flowHolder.endFlow()

    if(type === 'email')
    return (
        <AuthSlideIn key='step0'>
            <AuthBox 
                title="EMAIL ELLENŐRZÉS"
                inputs={[
                    {
                        type: 'text',
                        placeholder: '6 jegyű kód',
                        onChange: setCode
                    }
                ]}
                button="tovább"
                onDone={ onClick }
                links={[
                    {
                        url: '/register',
                        name: 'mégse'
                    }
                ]}
            />
        </AuthSlideIn>
    )

    if(type === 'mfa')
    return (
        <AuthSlideIn key='step0'>
            <AuthBox 
                title="2FA KÓD"
                inputs={[
                    {
                        type: 'text',
                        placeholder: '2fa kód',
                        onChange: setCode
                    }
                ]}
                button="tovább"
                onDone={ onClick }
                links={[
                    {
                        url: '/register',
                        name: 'mégse'
                    }
                ]}
            />
        </AuthSlideIn>
    )
}

export default TicketPage