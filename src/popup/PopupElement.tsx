import './popup-element.scss'
import close from '../assets/img/close.png'
import TFAPopup from './tfa-popup/TFAPopup'

const PopupElement = () => {
    return (
        <div className='popup-element'>
            <div className="popup-element_close">
                <img src={ close } alt="close" />
            </div>
            <div className="popup-element_container">
                <div className="popup-element_content">
                    <TFAPopup />
                </div>
            </div>
        </div>
    )
}

export default PopupElement