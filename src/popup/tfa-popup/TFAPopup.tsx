import { useCallback, useState } from 'react'
import './tfa-popup.scss'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

import { TFAEnableFlow, TotpGenerator, useAuth } from 'magicauth-client'
import { TailSpin } from 'react-loader-spinner'

const TFAPopup = () => {
    const magic = useAuth()
    const [ state, setState ] = useState(0)
    const [ code, setCode ] = useState('')

    const barcode = useCallback((node: HTMLCanvasElement) => {
        const flow = magic.flows().getFlow(TFAEnableFlow)
        
        if(node && flow.barcode)
            TotpGenerator.getQRCode(node, flow.barcode)
    }, [ magic ])

    const onDone = () => {
        if(state !== 1) {
            return
        }
        const flow = magic.flows().getFlow(TFAEnableFlow)
        
        flow.code({
            code
        })
    }

    const completeScan = () => setState(state + 1)
    const backToScan = () => setState(0)

    const back = () => magic.flows().endFlow()

    if(magic.isLoading) {
        return (
            <div className='col-12'>
                <div className="row">
                    <div className="col-12">
                        <h3>2FA AKTIVÁLÁS</h3>
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

    if(state === 0)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-6 col-sm-12">
                    <h3>2FA AKTIVÁLÁS</h3>
                    <p>Szkenneld be a 2FA kódot egy azonosító alkalmazással! (pl. Google Authenticator)</p>
                    <div className="mb"></div>
                    <Button 
                        type='primary'
                        text='Tovább'
                        onClick={ completeScan }
                    />
                    <span className='tfa_link' onClick={ back }>vissza</span>
                </div>
                <div className="col-6 col-sm-12 qrcode-container">
                    <canvas className='qrcode' ref={ barcode }></canvas>
                </div>
            </div>
        </div>
    )

    if(state === 1)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>2FA AKTIVÁLÁS</h3>
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
                    text='Aktiválás'
                    onClick={ onDone }
                />
                <p onClick={ backToScan }>vissza</p>
            </div>
        </div>
    )

    return(
        <div className='align-items-center'>invalid tfa state</div>
    )
}

export default TFAPopup