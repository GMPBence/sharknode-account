import './service-box.scss'

import minecraft_background from '../../assets/img/minecraft_background.png'
import minecraft_logo from '../../assets/img/minecraft_logo.png'
import IconText from '../icon-text/IconText'

type ServiceBoxProps = {

    icon: any
    banner?: any

    title: string
    onClick: () => void

}

const ServiceBox = (props: ServiceBoxProps) => {
    return (
        <div className='service-box' onClick={ props.onClick }>
            <div className="service-box_background">
                <img src={ props.banner ? props.banner : minecraft_background } alt="" />
            </div>
            <div className="service-box_overlay">
                <IconText
                    icon={ <img src={ props.icon } /> }
                    title={ props.title }
                    description='SZERVERBÉRLÉS'
                    color='green'
                />
            </div>
        </div>
    )
}

export default ServiceBox