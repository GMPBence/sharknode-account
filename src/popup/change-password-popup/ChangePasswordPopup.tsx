import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { useAuth, ChangePasswordFlow } from 'magicauth-client'
import Toaster from '../../app/util/Toaster'
import { TailSpin } from 'react-loader-spinner'

const ChangePasswordPopup = () => {
    const magic = useAuth()
    const [ password, setPassword ] = useState('')
    const [ passwordAgain, setPasswordAgain ] = useState('')

    const onClick = () => {
        if(password.length === 0) {
            Toaster.toastError('Adj meg egy jelszót.')
            return
        }
        if(password !== passwordAgain) {
            Toaster.toastError('A jelszó nem egyezik.')
            return
        }

        const flow = magic.flows().getFlow(ChangePasswordFlow)
        flow.changePassword(password)
    }

    if(magic.isLoading) {
        return (
            <div className='col-12'>
                <div className="row">
                    <div className="col-12">
                        <h3>JELSZÓ VÁLTOZTATÁS</h3>
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
                    <h3>JELSZÓ VÁLTOZTATÁS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='password'
                        placeholder='új jelszó'
                        onChange={ setPassword }
                    />
                </div>
                <div className="col-12 mb">
                    <Input 
                        type='password'
                        placeholder='új jelszó újra'
                        onChange={ setPasswordAgain }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Mentés'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default ChangePasswordPopup