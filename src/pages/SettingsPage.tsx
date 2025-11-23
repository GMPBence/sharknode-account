import SettingsBox from "../components/settings-box/SettingsBox"

import goofyahh from '../assets/img/goofyahh.png'
import email from '../assets/img/settings/email.png'
import lock from '../assets/img/settings/lock.png'
import user from '../assets/img/settings/user.png'
import { useAuth } from "magicauth-client"

const SettingsPage = () => {
    const magic = useAuth()

    const mfaToggle = () => {
        magic.services().getMFAService()
            .disableMfa(window.closePopup)
    }

    const changePassword = () => {
        magic.services().getPasswordService()
            .changePassword(window.closePopup)
    }

    const changeUsername = () => {
        magic.services().getNameService()
            .changeUsername(window.closePopup)
    }

    const changeEmail = () => {
        magic.services().getEmailService()
            .changeEmail(window.closePopup)
    }

    return (
        <div className='col-12'>
            <div className="row mb">
                <div className="col-12 mb">
                    <SettingsBox 
                        title='Email'
                        description="kovacs.bence0429@gmail.com"
                        image={ <img src={ email } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas',
                            onClick: changeEmail
                        }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        title='Jelszo'
                        image={ <img src={ lock } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas',
                            onClick: changePassword
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        title='Nev'
                        image={ <img src={ user } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas',
                            onClick: changeUsername
                        }}
                    />
                </div>
            </div>
            <div className="row mb">
                <div className="col-6 col-sm-12">
                    <SettingsBox 
                        title='2FA'
                        image={ <img src={ lock } alt="goofyahh" /> }
                        button={{
                            text: 'Engedelyezes',
                            onClick: mfaToggle
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12">
                    <SettingsBox 
                        title='Fiok torlese'
                        image={ <img src={ goofyahh } alt="goofyahh" /> }
                        button={{
                            text: 'Torles'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SettingsPage