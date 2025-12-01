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

type ServerBoxProps = {

    name: string
    expiresAt: Date
    expired: boolean
    price?: number

    properties: {

        type: string
        typeName: string
        planName: string
        ram: string
        cpu: string
        hdd: string
        
    }

}

const ServerBox = (props: ServerBoxProps) => {
    const navigate = useNavigate()
    const expired = props.expired

    const typeName = props.properties.typeName
    const planName = props.properties.planName

    const expiresDate = Util.formatDate(
        props.expiresAt
    )

    const iconColor = expired ? 'red' : 'green'

    const buttonText = expired 
        ? 'Megujitas: ' + props.price + ' SC' 
        : 'Kezeles'

    const onClick = () => {
        if(expired) {
            // todo: start renew process
            return
        }

        navigate('/manage')
    }

    return (
        <div className='server-box'>
            <IconText 
                icon={ <img src={ minecraft_logo } /> }
                title={ props.name }
                description={ typeName.toUpperCase() }
                color={ iconColor }
            />
            <div className="server-box_info">
                <p>Csomag: { planName }</p>
                {
                    !expired ?
                        <p>Lejarat: { expiresDate }</p>
                    : null
                }
            </div>
            <div className="server-box_row">
                <div className="server-box_resource">
                    <img src={ cpu } alt="" />
                    <h6>{ props.properties.cpu } szal</h6>
                </div>
                <div className="server-box_resource">
                    <img src={ hdd } alt="" />
                    <h6>{ props.properties.hdd } GB</h6>
                </div>
                <div className="server-box_resource">
                    <img src={ ram } alt="" />
                    <h6>{ props.properties.ram } GB</h6>
                </div>
            </div>
            <div className="server-box_button">
                <Button 
                    text={ buttonText }
                    type='secondary'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default ServerBox