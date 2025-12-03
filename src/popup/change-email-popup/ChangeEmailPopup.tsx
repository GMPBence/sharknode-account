import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { ChangeEmailFlow, useAuth } from 'magicauth-client'
import { TailSpin } from 'react-loader-spinner'

const ChangeEmailPopup = () => {
    const magic = useAuth()
    const [ email, setEmail ] = useState('')

    const onClick = () => {
        const flow = magic.flows().getFlow(ChangeEmailFlow)
        flow.email(email)
    }

    if(magic.isLoading) {
        return (
            <div className='col-12'>
                <div className="row">
                    <div className="col-12">
                        <h3>EMAIL VÁLTOZTATÁS</h3>
                    </div>
                </div>
                <div className="align-items-center">
                    <TailSpin 
                        width="45"
                        color="white"
                    />
                </div>
            </div>
        )
    }
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>EMAIL VÁLTOZTATÁS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='új email cím'
                        onChange={ setEmail }
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

export default ChangeEmailPopup