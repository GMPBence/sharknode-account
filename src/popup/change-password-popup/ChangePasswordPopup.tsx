import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { useAuth, ChangePasswordFlow } from 'magicauth-client'
import Toaster from '../../app/util/Toaster'

const ChangePasswordPopup = () => {
    const magic = useAuth()
    const [ password, setPassword ] = useState('')
    const [ passwordAgain, setPasswordAgain ] = useState('')

    const onClick = () => {
        if(password.length === 0) {
            Toaster.toastError('Adj meg egy jelszot')
            return
        }
        if(password !== passwordAgain) {
            Toaster.toastError('A jelszo nem egyezik')
            return
        }

        const flow = magic.flows().getFlow(ChangePasswordFlow)
        flow.changePassword(password)
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>JELSZO VALTOZTATAS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='password'
                        placeholder='uj jelszo'
                        onChange={ setPassword }
                    />
                </div>
                <div className="col-12 mb">
                    <Input 
                        type='password'
                        placeholder='uj jelszo ujra'
                        onChange={ setPasswordAgain }
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

export default ChangePasswordPopup