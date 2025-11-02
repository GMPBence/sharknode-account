import './buying-box.scss'
import minecraft_background from '../../assets/img/minecraft_background.png'
import minecraft_logo from '../../assets/img/minecraft_logo.png'
import Button from '../button/Button'
import IconText from '../icon-text/IconText'

const BuyingBox = () => {
    return (
        <div className='buying-box'>
            <div className="buying-box_logo">
                <img src={ minecraft_background } alt="" />
            </div>
            <div className="buying-box_overlay">
                <IconText 
                    icon={ <img src={ minecraft_logo } /> }
                    title='Minecraft'
                    description='JATEKSZERVER'
                    color='green'
                />
            </div>
            <div className="buying-box_text">
                <h4>250 Ft-tol / honap</h4>
                <Button text='Konfiguralas' type='secondary' />
            </div>
        </div>
    )
}

export default BuyingBox