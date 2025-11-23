import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { useAuth, ChangeNameFlow } from 'magicauth-client'

const ChangeNamePopup = () => {
    const magic = useAuth()
    const [ username, setUsername ] = useState('')

    const onClick = () => {
        const flow = magic.flows().getFlow(ChangeNameFlow)
        flow.username(username)
    }
    const back = () => magic.flows().endFlow()

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>NEVVALTOZTATAS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='uj felhasznalonev'
                        onChange={ setUsername }
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

export default ChangeNamePopup