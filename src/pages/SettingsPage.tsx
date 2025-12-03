import SettingsBox from "../components/settings-box/SettingsBox"

import profile from '../assets/img/profile.png'
import email from '../assets/img/settings/email.png'
import lock from '../assets/img/settings/lock.png'
import name from '../assets/img/clipboard.png'
import { useAuth } from "magicauth-client"
import { useNavigate } from "react-router"
import DeleteAccountPopup from "../popup/delete-account-popup/DeleteAccountPopup"

const SettingsPage = () => {
    const navigate = useNavigate()
    const magic = useAuth()
    const mfaText = magic.user.mfa ? 'Kikapcsolás' : 'Bekapcsolás'

    const mfaToggle = () => {
        if(magic.user.mfa) {
            magic.services().getMFAService()
                .disableMfa(window.closePopup)

            return
        }

        magic.services().getMFAService()
            .enableMfa(window.closePopup)
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

    const deleteAccount = () => {
        window.openPopup(
            <DeleteAccountPopup 
                onClick={ actuallyDelete }
            />
        )
    }

    const actuallyDelete = () => {
        magic.services().getDataService()
            .deleteUser(() => {
                window.closePopup()
                navigate('/')
            })
    }

    return (
        <div className='col-12'>
            <div className="row mb">
                <div className="col-12 mb">
                    <SettingsBox 
                        title='Email'
                        description={ magic.user.email }
                        image={ <img src={ email } alt="goofyahh" /> }
                        button={{
                            text: 'Módosítás',
                            onClick: changeEmail
                        }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        title='Jelszó'
                        image={ <img src={ lock } alt="goofyahh" /> }
                        button={{
                            text: 'Módosítás',
                            onClick: changePassword
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        title='Név'
                        image={ <img src={ name } alt="goofyahh" /> }
                        button={{
                            text: 'Módosítás',
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
                            text: mfaText,
                            onClick: mfaToggle
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12">
                    <SettingsBox 
                        title='Fiok törlése'
                        image={ <img src={ profile } alt="goofyahh" style={{ borderRadius: '50%', width: '60px' }} /> }
                        button={{
                            text: 'Törlés',
                            onClick: deleteAccount
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SettingsPage