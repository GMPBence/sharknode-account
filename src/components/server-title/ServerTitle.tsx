import { useEffect, useRef, useState } from 'react'
import Util from '../../app/util/Util'
import Button from '../button/Button'
import IconText from '../icon-text/IconText'
import './server-title.scss'
import SharkNode from '../../app/SharkNode'

type ServerTitleProps = {

    name: string
    type: string
    typeName: string
    date: number
    price: number

}

const ServerTitle = (props: ServerTitleProps) => {
    const initialized = useRef(false)
    const [ time, setTime ] = useState('')

    const [ intId, setIntId ] = useState<any>()
    const [ expiresAt, setExpiresAt ] = useState(0)

    useEffect(() => {
        if(props.date - Util.timestamp() < 0) {
            return
        }
        if(expiresAt === props.date || initialized.current) {
            initialized.current = false // kill reacts fuckass logic
            return
        }
        initialized.current = true
        setExpiresAt(props.date)

        if(intId) {
            window.clearInterval(intId)
        }

        setTime(getFormatted())
        const interval = setInterval(() => {
            setTime(getFormatted())

            if(getCurrent() <= 0) {
                setTime('00:00')
                setExpiresAt(0)
                window.clearInterval(interval)
                return
            }
        }, 1000);

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
    
    const iconSrc = SharkNode.getImages().get(props.type)

    return (
        <div className='server-title'>
            <div className="server-title_left">
                <IconText 
                    icon={ <img src={ iconSrc }></img> }
                    title={ props.name }
                    description={ props.typeName.toUpperCase() }
                    color='green'
                />
            </div>
            <div className="server-title_right">
                <h5>{ time } mulva lejar</h5>
                <h5>{ props.price } SC</h5>
            </div>
        </div>
    )
}

export default ServerTitle