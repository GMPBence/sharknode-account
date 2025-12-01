import { useEffect, useRef, useState } from 'react'
import Util from '../../app/util/Util'
import Button from '../button/Button'
import IconText from '../icon-text/IconText'
import './expiring-server.scss'

type ExpiringServerProps = {

    name: string
    date: number
    price: string
    onClick?: () => void
    onExpired: () => void

}

const ExpiringServer = (props: ExpiringServerProps) => {
    const initialized = useRef(false)
    const [ time, setTime ] = useState('')

    useEffect(() => {
        if(initialized.current) {
            return
        }
        initialized.current = true

        let expiresIn = getCurrent()

        const interval = setInterval(() => {
            expiresIn = getCurrent()

            const minutes = Math.floor(expiresIn / 60)
            const seconds = expiresIn % 60

            const minutesFormat = String(minutes).padStart(2, '0')
            const secondsFormat = String(seconds).padStart(2, '0')

            setTime(minutesFormat + ':' + secondsFormat)

            if(expiresIn <= 0) {
                setTime('00:00')
                window.clearInterval(interval)
                return
            }
        }, 10);
    })

    const getCurrent = () => {
        return props.date - Util.timestamp()
    }

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
                <h5>{ time } mulva lejar</h5>
                <h5>{ props.price } SC</h5>
                {
                    props.onClick ?
                        <Button text='Megujitas' type='secondary' onClick={ props.onClick } />
                    : null
                }
            </div>
        </div>
    )
}

export default ExpiringServer