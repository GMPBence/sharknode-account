import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { PasswordFlow, useAuth } from 'magicauth-client'

const PasswordPopup = () => {
    const magic = useAuth()
    const [ password, setPassword ] = useState('')

    const onClick = () => {
        const flow = magic.flows().getGenericFlow()
        if(flow === null) {
            return
        }

        if(!(flow instanceof PasswordFlow)) {
            return
        }

        flow.password({
            password
        })
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>JELSZO ELLENORZES</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='password'
                        placeholder='jelenlegi jelszo'
                        onChange={ setPassword }
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

export default PasswordPopup