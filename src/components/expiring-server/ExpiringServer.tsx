import Button from '../button/Button'
import IconText from '../icon-text/IconText'
import './expiring-server.scss'

type ExpiringServerProps = {

    name: string
    date: string
    price: string
    onClick?: () => void

}

const ExpiringServer = (props: ExpiringServerProps) => {
    return (
        <div className='expiring-server'>
            <div className="expiring-server_left">
                <IconText 
                    icon={ <p>!</p> }
                    title={ props.name }
                    description='HAMAROSAN LEJAR'
                    color='red'
                />
            </div>
            <div className="expiring-server_right">
                <h5>{ props.date }</h5>
                <h5>{ props.price } SC</h5>
                {
                    props.onClick ?
                        <Button text='Megujitas' type='secondary' />
                    : null
                }
            </div>
        </div>
    )
}

export default ExpiringServer