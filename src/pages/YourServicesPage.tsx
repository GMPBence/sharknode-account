import { useSelector } from 'react-redux'
import Util from '../app/util/Util'
import ExpiringServer from '../components/expiring-server/ExpiringServer'
import ServerBox from '../components/server-box/ServerBox'
import Entitlement from '../app/entitlements/Entitlement'
import { Link, useNavigate } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from 'magicauth-client'
import SharkServices from '../app/services/SharkServices'
import { TailSpin } from 'react-loader-spinner'

const YourServicesPage = () => {
    const navigate = useNavigate()
    const magic = useAuth()
    const service = magic.services<SharkServices>().getEntitlements()

    const initialized = useRef(false)

    const [ loading, setLoading ] = useState(true)
    const entitlements: Entitlement[] = useSelector((store: any) => store.entitlements).state

    const [ expiring, setExpiring ] = useState([])

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

    useEffect(() => {
        if(!entitlements) {
            return
        }

        searchExpiring()
    }, [ entitlements ])

    const searchExpiring = () => {
        setExpiring(
            entitlements.filter(element => 
                element.expiresAt - 600 < Util.timestamp()
                    && !element.expired
            )
        )
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
    if(!entitlements || entitlements.length === 0) {
        return (
            <div className='align-items-center'>
                <p>Még nincsenek szervereid</p>
                <Link to='/services'>Nézz szét itt</Link>
            </div>
        )
    }
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    {
                        expiring.map(element => (
                            <ExpiringServer 
                                name={ element.name }
                                date={ element.expiresAt }
                                price={ element.price }
                                autoRenew={ element.autoRenew }
                                onClick={ ( ) => { service.renew(element) } }
                            />
                        ))
                    }
                </div>
            </div>
            <div className="col-12">
                <div className="row row-gap">
                    {
                        entitlements.map(element => (
                            <ServerBox 
                                entitlement={ element }
                                onClick={() => {
                                    if(element.expired) {
                                        service.renew(element)
                                        return
                                    }

                                    navigate('/manage?entitlement_id=' + element.id)
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default YourServicesPage