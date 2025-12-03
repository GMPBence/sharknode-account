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
                    <h3>EMAIL ELLENŐRZÉS</h3>
                    <p>Kérlek nézd meg az emailedre küldött 6 jegyű kódot.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='6 jegyű kód'
                        onChange={ setCode }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovább'
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
                    <h3>2FA KÓD</h3>
                    <p>Kérlek nézd meg a választott alkalmazásban a 6 jegyű kódodat.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='2fa kód'
                        onChange={ setCode }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovább'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default TicketPopup