import './popup-element.scss'
import close from '../assets/img/close.png'
import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth, Util } from 'magicauth-client'

const PopupElement = () => {
    const auth = useAuth()
    const [ key, setKey ] = useState<string>('')
    const [ popup, setPopup ] = useState<ReactNode>(null)

    window.openPopup = (popup) => {
        setPopup(popup)
        setKey(Util.timestamp() + '')
    }
    window.closePopup = () => {
        setPopup(null)

        const flow = auth.flows().getGenericFlow()
        if(!flow) {
            return
        }

        auth.flows().endFlow()
    }

    if(!popup) {
        return (
            <div id='nopopup'></div>
        )
    }

    return (
        <div className='popup-element'>
            <div className="popup-element_close">
                <img src={ close } alt="close" onClick={ window.closePopup } />
            </div>
            <div className="popup-element_container">
                <motion.div
                    key={ key }
                    initial={{ scale: .95, y: -40 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25
                    }}
                    className='popup-element_content'
                >
                    {
                        popup
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default PopupElement