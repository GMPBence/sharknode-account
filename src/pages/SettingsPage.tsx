import SettingsBox from "../components/settings-box/SettingsBox"

import goofyahh from '../assets/img/goofyahh.png'
import email from '../assets/img/settings/email.png'
import lock from '../assets/img/settings/lock.png'
import user from '../assets/img/settings/user.png'

const SettingsPage = () => {
    return (
        <div className='col-12'>
            <div className="row mb">
                <div className="col-12 mb">
                    <SettingsBox 
                        title='Email'
                        description="kovacs.bence0429@gmail.com"
                        image={ <img src={ email } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas'
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
                            text: 'Modositas'
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        title='Nev'
                        image={ <img src={ user } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas'
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
                            text: 'Engedelyezes'
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