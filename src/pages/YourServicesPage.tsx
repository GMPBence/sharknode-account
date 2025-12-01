import { useSelector } from 'react-redux'
import Util from '../app/util/Util'
import ExpiringServer from '../components/expiring-server/ExpiringServer'
import ServerBox from '../components/server-box/ServerBox'
import Entitlement from '../app/entitlements/Entitlement'
import { Link } from 'react-router'
import { useEffect, useRef } from 'react'
import { useAuth } from 'magicauth-client'
import SharkServices from '../app/services/SharkServices'

const YourServicesPage = () => {
    const magic = useAuth()
    const initialized = useRef(false)
    const services: Entitlement[] = useSelector((store: any) => store.entitlements).state

    console.log(services)

    let expiring: Entitlement[]

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true

        magic.services<SharkServices>()
            .getEntitlements().retrieve()
    })

    const searchExpiring = () => {
      
    }

    if(services.length === 0) {
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
                    <ExpiringServer 
                        name='MistyMC Lobby'
                        date={ Util.timestamp() + 20 }
                        price='500'
                        onClick={ ( ) => {} }
                        onExpired={ () => {} }
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="row row-gap">
                    <ServerBox 
                        name='MistyMC Lobby'
                        expiresAt={ Util.getDate(Util.timestamp() + 7000000) }
                        expired={ true }
                        price={ 599 }
                        properties={{
                            type: 'minecraft-spigot',
                            typeName: 'Minecraft Spigot',
                            planName: 'Default',
                            ram: '8',
                            cpu: '2',
                            hdd: '12'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default YourServicesPage