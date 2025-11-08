import './plan-box.scss'

import minecraft_logo from '../../assets/img/minecraft_logo.png'
import hdd from '../../assets/img/hdd.png'
import cpu from '../../assets/img/cpu.png'
import ram from '../../assets/img/ram.png'

import Button from '../button/Button'
import IconText from '../icon-text/IconText'

const PlanBox = () => {
    return (
        <div className='plan-box'>
            <IconText 
                icon={ <img src={ minecraft_logo } /> }
                title='Anyad SMP'
                description='MINECRAFT'
                color='green'
            />
            <div className="plan-box_row">
                <div className="plan-box_resource">
                    <img src={ cpu } alt="" />
                    <h6>4 szal</h6>
                </div>
                <div className="plan-box_resource">
                    <img src={ hdd } alt="" />
                    <h6>32 GB</h6>
                </div>
                <div className="plan-box_resource">
                    <img src={ ram } alt="" />
                    <h6>8 GB</h6>
                </div>
            </div>
            <div className="plan-box_button">
                <Button 
                    text='500 SharkCoin / 12 ora'
                    type='secondary'
                />  
            </div>
        </div>
    )
}

export default PlanBox