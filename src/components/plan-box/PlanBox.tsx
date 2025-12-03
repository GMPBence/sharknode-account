import './plan-box.scss'

import minecraft_logo from '../../assets/img/minecraft_logo.png'
import hddImg from '../../assets/img/hdd.png'
import cpuImg from '../../assets/img/cpu.png'
import ramImg from '../../assets/img/ram.png'

import Button from '../button/Button'
import IconText from '../icon-text/IconText'
import Plan from '../../app/items/Plan'
import Item from '../../app/items/Item'

type PlanBoxProps = {

    item: Item
    plan: Plan
    onClick: () => void

}

const PlanBox = (props: PlanBoxProps) => {
    const plan = props.plan
    const item = props.item

    const title = plan.name
    const desc = item.name.toUpperCase()

    const cpu = plan.cpu
    const disk = plan.disk
    const ram = plan.ram

    const premium = plan.isPremiumNode
    const price = plan.price

    return (
        <div className='plan-box'>
            <IconText 
                icon={ <img src={ minecraft_logo } /> }
                title={ title }
                description={ desc }
                color='green'
            />
            <div className="plan-box_row">
                <div className="plan-box_resource">
                    <img src={ cpuImg } alt="" />
                    <h6>{ cpu } szál</h6>
                </div>
                <div className="plan-box_resource">
                    <img src={ hddImg } alt="" />
                    <h6>{ disk } GB</h6>
                </div>
                <div className="plan-box_resource">
                    <img src={ ramImg } alt="" />
                    <h6>{ ram } GB</h6>
                </div>
            </div>
            <div className="plan-box_button">
                <Button 
                    text={ price + ' SharkCoin / 6 óra' }
                    type='secondary'
                    onClick={ props.onClick }
                />  
            </div>
        </div>
    )
}

export default PlanBox