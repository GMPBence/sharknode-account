import IconText from '../icon-text/IconText'
import './server-box.scss'
import minecraft_logo from '../../assets/img/minecraft_logo.png'
import python_logo from '../../assets/img/minecraft_logo.png'
import nodejs_logo from '../../assets/img/minecraft_logo.png'

import hdd from '../../assets/img/hdd.png'
import cpu from '../../assets/img/cpu.png'
import ram from '../../assets/img/ram.png'
import Button from '../button/Button'
import { Link, useNavigate } from 'react-router'
import Util from '../../app/util/Util'
import SharkNode from '../../app/SharkNode'
import { useAuth } from 'magicauth-client'
import SharkServices from '../../app/services/SharkServices'
import Entitlement from '../../app/entitlements/Entitlement'

type ServerBoxProps = {

    entitlement: Entitlement
    onClick: () => void

}

const ServerBox = (props: ServerBoxProps) => {
    const entitlement = props.entitlement

    const expired = entitlement.expired

    const typeName = entitlement.properties.typeName
    const planName = entitlement.properties.planName

    const expiresDate = Util.formatDate(
        Util.getDate(entitlement.expiresAt)
    )

    const iconColor = expired ? 'red' : 'green'

    const buttonText = expired 
        ? 'Hosszabítás: ' + entitlement.price + ' SC' 
        : 'Kezelés'

    const iconSrc = SharkNode.getImages().get(entitlement.properties.type)

    return (
        <div className='server-box'>
            <IconText 
                icon={ <img src={ iconSrc } /> }
                title={ entitlement.name }
                description={ typeName.toUpperCase() }
                color={ iconColor }
            />
            <div className="server-box_info">
                <p>Csomag: { planName }</p>
                {
                    !expired ?
                        <p>Lejárat: { expiresDate }</p>
                    : null
                }
            </div>
            <div className="server-box_row">
                <div className="server-box_resource">
                    <img src={ cpu } alt="" />
                    <h6>{ entitlement.properties.cpu } szál</h6>
                </div>
                <div className="server-box_resource">
                    <img src={ hdd } alt="" />
                    <h6>{ entitlement.properties.disk } GB</h6>
                </div>
                <div className="server-box_resource">
                    <img src={ ram } alt="" />
                    <h6>{ entitlement.properties.ram } GB</h6>
                </div>
            </div>
            <div className="server-box_button">
                <Button 
                    text={ buttonText }
                    type='secondary'
                    onClick={ props.onClick }
                />
            </div>
        </div>
    )
}

export default ServerBox