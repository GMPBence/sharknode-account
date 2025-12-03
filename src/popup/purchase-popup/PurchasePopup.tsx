import React, { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Select from '../../components/select/Select'
import { useAuth } from 'magicauth-client'
import SharkServices from '../../app/services/SharkServices'
import { TailSpin } from 'react-loader-spinner'

type ServerProps = {

    title: string
    versions: string[]
    
}

const PurchasePopup = (props: ServerProps) => {
    const magic = useAuth()
    const planService = magic.services<SharkServices>().getPlans()

    const [ loading, setLoading ] = useState(false)

    const [ name, setName ] = useState('')
    const [ version, setVersion ] = useState('')
    const [ subdomain, setSubdomain ] = useState('')

    const onClick = async () => {
        await planService.purchasePlan(
            name, 
            subdomain,
            version
        )
    }

    if(loading) {
        return (
            <div className='col-12'>
                <div className="row">
                    <div className="col-12">
                        <h3>NÉVVÁLTOZTATÁS</h3>
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
                <div className="col-12 mb-sm">
                    <h3>{ props.title.toUpperCase() }</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-sm">
                    <Input 
                        type='text'
                        placeholder='szervernév'
                        onChange={ setName }
                    />
                </div>
                <div className="col-12 mb-sm">
                    <Input 
                        type='text'
                        placeholder='subdomain'
                        onChange={ setSubdomain }
                    />
                </div>
                <div className="col-12 mb-sm">
                    <Select 
                        placeholder='Válassz verziót'
                        options={ props.versions }
                        onChange={ setVersion }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Vásárlás'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default PurchasePopup