import Button from '../button/Button'
import IconText from '../icon-text/IconText'
import './expiring-service.scss'

type ExpiringServiceProps = {

    name: string
    date: string
    price: string
    onClick?: () => void

}

const ExpiringService = (props: ExpiringServiceProps) => {
    return (
        <div className='expiring-service'>
            <div className="expiring-service_left">
                <IconText 
                    icon={ <p>!</p> }
                    title={ props.name }
                    description='HAMAROSAN LEJAR'
                    color='red'
                />
            </div>
            <div className="expiring-service_right">
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

export default ExpiringService