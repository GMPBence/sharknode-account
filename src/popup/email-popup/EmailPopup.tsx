import { useState } from "react"
import Button from "../../components/button/Button"
import Input from "../../components/input/Input"

const EmailPopup = () => {
    const [ state, setState ] = useState(0)

    if(state === 0)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>EMAIL VALTOZTATAS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='uj email cim'
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovabb'
                />
            </div>
        </div>
    )

    if(state === 1)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>EMAIL VALTOZTATAS</h3>
                    <p>Add meg a régi email címedre küldött kódot.</p>
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
                    text='Tovabb'
                />
            </div>
        </div>
    )

    if(state === 1)
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>EMAIL VALTOZTATAS</h3>
                    <p>Most pedig az új email címedre küldött kódot.</p>
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
                    text='Tovabb'
                />
            </div>
        </div>
    )

    return(
        <div className='align-items-center'>invalid tfa state</div>
    )
}

export default EmailPopup