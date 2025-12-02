import ExpiringServer from "../components/expiring-server/ExpiringServer"

import nameImg from '../assets/img/name.png'
import reload from '../assets/img/reload.png'
import domain from '../assets/img/domain.png'

import SettingsBox from "../components/settings-box/SettingsBox"
import Button from "../components/button/Button"
import { Link, useLocation, useNavigate } from "react-router"
import { useAuth } from "magicauth-client"
import { useEffect, useRef, useState } from "react"
import SharkServices from "../app/services/SharkServices"
import { useSelector } from "react-redux"
import Entitlement from "../app/entitlements/Entitlement"
import Util from "../app/util/Util"
import ServerPropsPopup from "../popup/server-name-popup/ServerPropsPopup"
import DeleteServerPopup from "../popup/delete-server-popup/DeleteServerPopup"
import ServerTitle from "../components/server-title/ServerTitle"
import { TailSpin } from "react-loader-spinner"

const ManagePage = () => {
    const navigate = useNavigate()
    const magic = useAuth()
    const location = useLocation()

    const [ render, setRender ] = useState(false)

    const searchParams = new URLSearchParams(location.search)
    const searchId = searchParams.get('entitlement_id')

    const service = magic.services<SharkServices>().getEntitlements()
    
    const entitlements: Entitlement[] = useSelector((store: any) => store.entitlements).state
    const [ entitlement, setEntitlement ] = useState<Entitlement>(null)

    const [ name, setName ] = useState(null)
    const [ autoRenew, setAutoRenew ] = useState(false)
    const [ subdomain, setSubdomain ] = useState(null)

    useEffect(() => {
        if(!entitlements) {
            navigate('/yourservices') // retrieve services first
            return
        }

        const ent = entitlements.filter(element => 
            element.id === searchId
        )[0]
        if(!ent) {
            return
        }

        setEntitlement(ent)
        resetSettings(ent)
    }, [ entitlements ])

    const resetSettings = (ent: Entitlement) => {
        setName(ent.name)
        setAutoRenew(ent.autoRenew)
        setSubdomain(ent.subdomain)
    }

    const updateName = () => {
        window.openPopup(
            <ServerPropsPopup 
                title='új szervernév' 
                onChange={ setName } 
            />
        )
    }
    const updateAutoRenew = () => {
        if(autoRenew) {
            setAutoRenew(false)
        } else {
            setAutoRenew(true)
        }
    }
    const updateSubdomain = () => {
        window.openPopup(
            <ServerPropsPopup 
                title='új subdomain' 
                onChange={ setSubdomain } 
            />
        )
    }

    const updateSettings = () => {
        const ent: Entitlement = Util.copy(entitlement)

        ent.name = name
        ent.autoRenew = autoRenew
        ent.subdomain = subdomain

        service.update(ent)
    }
    
    const deleteServer = () => {
        window.openPopup(
            <DeleteServerPopup 
                onClick={() => {
                    service.delete(entitlement.id)
                    navigate('/yourservices')
                }}
            />
        )
    }

    const renewServer = () => {
        service.renew(entitlement)
    }

    if(!entitlement) {
        return (
            <div className='align-items-center'>
                <p>Valami hiba történt</p>
                <Link to='/yourservices'>Vissza</Link>
            </div>
        )
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <ServerTitle
                        name={ entitlement.name }
                        date={ entitlement.expiresAt }
                        price={ entitlement.price }
                        type={ entitlement.properties.type }
                        typeName={ entitlement.properties.typeName }
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        description={ name }
                        image={ <img src={ nameImg } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas',
                            onClick: updateName
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        description='Automatikus megujitas'
                        image={ <img src={ reload } alt="goofyahh" /> }
                        button={{
                            text: autoRenew ? 'Bekapcsolva' : 'Kikapcsolva',
                            type: autoRenew ? 'green' : 'red',
                            onClick: updateAutoRenew
                        }}
                    />
                </div>
            </div>
            <div className="row mb">
                <div className="col-12 mb">
                    <SettingsBox 
                        title='Subdomain'
                        description={ subdomain + '.sharknode.hu' }
                        image={ <img src={ domain } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas',
                            onClick: updateSubdomain
                        }}
                    />
                </div>
            </div>
            <div className="align-items-center">
                <div className="row row-gap">
                    <Button 
                        text="Mentes"
                        type="secondary"
                        onClick={ updateSettings }
                    />
                    {
                        !entitlement.autoRenew ? 
                            <Button 
                                text="Hosszabbítás"
                                type="secondary"
                                onClick={ renewServer }
                            />
                        : null
                    }
                    <Button 
                        text="Torles"
                        type="red"
                        onClick={ deleteServer }
                    />
                </div>
            </div>
        </div>
    )
}

export default ManagePage