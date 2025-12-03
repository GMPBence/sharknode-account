import { useEffect, useRef, useState } from 'react'
import Util from '../../app/util/Util'
import Button from '../button/Button'
import IconText from '../icon-text/IconText'
import './expiring-server.scss'

type ExpiringServerProps = {

    name: string
    date: number
    price: number
    autoRenew: boolean
    onClick?: () => void

}

const ExpiringServer = (props: ExpiringServerProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    const [ time, setTime ] = useState('')
    const [ intId, setIntId ] = useState<any>()

    useEffect(() => {
        if(props.date - Util.timestamp() < 0) {
            return
        }
   
        if(intId) {
            window.clearInterval(intId)
        }

        setTime(getFormatted())
        let counter = 0
        const interval = setInterval(() => {
            setTime(getFormatted())

            if(getCurrent() <= 1) {
                counter++;

                if(counter > 7) {
                    if(divRef.current) {
                        divRef.current.classList.add('expiring-server-out')
                    }
                }
            }

            if(getCurrent() <= 0) {
                console.log('CLEAR INT')
                window.clearInterval(interval)
                setTime('00:00')
                return
            }
        }, 100);

        setIntId(interval)
    }, [ props ])

    const getFormatted = () => {
        const expiresIn = getCurrent()
        const minutes = Math.floor(expiresIn / 60)
        const seconds = expiresIn % 60

        const minutesFormat = String(minutes).padStart(2, '0')
        const secondsFormat = String(seconds).padStart(2, '0')

        return minutesFormat + ':' + secondsFormat
    }

    const getCurrent = () => {
        return props.date - Util.timestamp()
    }

    if(time === '00:00') {
        return
    }
    return (
        <div className='expiring-server' ref={ divRef }>
            <div className="expiring-server_left">
                <IconText 
                    icon={ <p>!</p> }
                    title={ props.name }
                    description='HAMAROSAN LEJÁR'
                    color='red'
                />
            </div>
            <div className="expiring-server_right">
                <h5>{ time } múlva lejár</h5>
                <h5>{ props.price } SC</h5>
                {
                    props.onClick ?
                        <Button 
                            text={ props.autoRenew ? 'Automatikus' : 'Hosszabbítás' } 
                            disabled={ props.autoRenew } 
                            type='secondary' 
                            onClick={ props.onClick } 
                        />
                    : null
                }
            </div>
        </div>
    )
}

export default ExpiringServer