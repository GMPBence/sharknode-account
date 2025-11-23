import { Captcha } from 'magicauth-client'
import Turnstile from 'react-turnstile'

const CaptchaPage = () => {
    const verify = (token: string) => Captcha.execute(token)

    return (
        <div className='captcha'>
            <Turnstile
                sitekey='0x4AAAAAABz0lJhRP0WeRQaa'
                onVerify={ verify }
            />
        </div>
    )
}

export default CaptchaPage





