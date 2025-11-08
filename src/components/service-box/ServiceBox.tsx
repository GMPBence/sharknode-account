import './service-box.scss'

import minecraft_background from '../../assets/img/minecraft_background.png'
import minecraft_logo from '../../assets/img/minecraft_logo.png'
import IconText from '../icon-text/IconText'

const ServiceBox = () => {
    return (
        <div className='service-box'>
            <div className="service-box_background">
                <img src={ minecraft_background } alt="" />
            </div>
            <div className="service-box_overlay">
                <IconText
                    icon={ <img src={ minecraft_logo } /> }
                    title='Minecraft'
                    description='JATEKSZERVER'
                    color='green'
                />
            </div>
        </div>
    )
}

export default ServiceBox