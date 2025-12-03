import { useSelector } from 'react-redux'
import ServiceBox from '../components/service-box/ServiceBox'
import Item from '../app/items/Item'
import SharkNode from '../app/SharkNode'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from 'magicauth-client'
import SharkServices from '../app/services/SharkServices'
import { Link, useNavigate } from 'react-router'
import { TailSpin } from 'react-loader-spinner'

const ServicesPage = () => {
    const navigate = useNavigate()
    const magic = useAuth()
    const service = magic.services<SharkServices>().getItems()

    const initialized = useRef(false)

    const [ loading, setLoading ] = useState(true)
    const items: Item[] = useSelector((store: any) => store.items).state

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true
        setLoading(true); 
    
        (async () => {
            await service.initialize()
            setLoading(false)
        })()
    })

    const selectService = (item: Item) => {
        service.selectItem(item)
        navigate('/services/plans')
    }
 
    if(loading) {
        return (
            <div className='align-items-center'>
                <TailSpin
                    width="45"
                    color="white"
                />
            </div>
        )
    }
    if(!items || items.length === 0) {
        return (
            <div className='align-items-center'>
                <p>Valami hiba történt.</p>
            </div>
        )
    }
    return (
        <div className='col-12'>
            <div className="row row-center row-gap">
                {
                    items.map((element) => (
                        <ServiceBox 
                            title={ element.name }
                            icon={ SharkNode.getImages().get(element.type) }
                            onClick={ () => selectService(element) }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesPage