import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { CodeFlow, useAuth } from 'magicauth-client'

type TicketPopupProps = {

    type: string

}

const TicketPopup = (props: TicketPopupProps) => {
    const flowHolder = useAuth().flows()
    const [ code, setCode ] = useState('')

    const onClick = () => {
        const flow = flowHolder.getGenericFlow() as CodeFlow        
        flow.code({ code })
    }

    if(props.type === 'email')
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>EMAIL KOID</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='kod'
                        onChange={ setCode }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovabb'
                    onClick={ onClick }
                />
            </div>
        </div>
    )

    if(props.type === 'mfa')
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>2FA KOID</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='kod'
                        onChange={ setCode }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovabb'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default TicketPopup