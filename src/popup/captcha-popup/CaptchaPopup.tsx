import Turnstile from 'react-turnstile'
import { Captcha } from 'magicauth-client'

const CaptchaPopup = () => {
    const verify = (token: string) => Captcha.execute(token)

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>NEM VAGY ROBOT?</h3>
                </div>
            </div>
            <div className="align-items-center">
                <Turnstile
                    sitekey='0x4AAAAAABz0lJhRP0WeRQaa'
                    onVerify={ verify }
                />
            </div>
        </div>
    )
}

export default CaptchaPopup