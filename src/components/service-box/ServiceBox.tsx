import IconText from '../icon-text/IconText'
import './service-box.scss'
import minecraft_logo from '../../assets/img/minecraft_logo.png'

import hdd from '../../assets/img/hdd.png'
import cpu from '../../assets/img/cpu.png'
import ram from '../../assets/img/ram.png'
import Button from '../button/Button'
import { Link } from 'react-router'

const ServiceBox = () => {
    return (
        <div className='service-box'>
            <IconText 
                icon={ <img src={ minecraft_logo } /> }
                title='Anyad SMP'
                description='MINECRAFT'
                color='green'
            />
            <div className="service-box_info">
                <p>Tipus: Minecraft Default</p>
                <p>Lejarat: 2025.12.02.</p>
            </div>
            <div className="service-box_row">
                <div className="service-box_resource">
                    <img src={ cpu } alt="" />
                    <h6>4 szal</h6>
                </div>
                <div className="service-box_resource">
                    <img src={ hdd } alt="" />
                    <h6>32 GB</h6>
                </div>
                <div className="service-box_resource">
                    <img src={ ram } alt="" />
                    <h6>8 GB</h6>
                </div>
            </div>
            <div className="service-box_button">
                <Link to='/manage'>
                <Button 
                    text='Kezeles'
                    type='secondary'
                />  </Link>
            </div>
        </div>
    )
}

export default ServiceBox