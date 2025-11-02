import { useState } from 'react'
import './tfa-popup.scss'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

import qrcode from '../../assets/img/qrcode.png'

const TFAPopup = () => {
    const [ state, setState ] = useState(0)

    if(state === 0)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-6 col-sm-12">
                    <h3>2FA AKTIVALAS</h3>
                    <p>Szkenneld be a 2FA kodot egy azonosito alkalmazassal! (pl. Google Authenticator)</p>
                    <div className="mb"></div>
                    <Button 
                        type='primary'
                        text='Tovabb'
                    />
                </div>
                <div className="col-6 col-sm-12 qrcode-container">
                    <img className='qrcode' src={ qrcode } alt="qrcode" />
                </div>
            </div>
        </div>
    )

    if(state === 1)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>2FA AKTIVALAS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='6 jegyu kod'
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Aktivalas'
                />
            </div>
        </div>
    )

    return(
        <div className='align-items-center'>invalid tfa state</div>
    )
}

export default TFAPopup