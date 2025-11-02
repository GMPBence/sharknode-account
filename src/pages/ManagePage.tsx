import ExpiringService from "../components/expiring-service/ExpiringService"

import name from '../assets/img/name.png'
import reload from '../assets/img/reload.png'
import domain from '../assets/img/domain.png'

import SettingsBox from "../components/settings-box/SettingsBox"
import Button from "../components/button/Button"

const ManagePage = () => {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <ExpiringService 
                        name='MistyMC Lobby'
                        date='01:56 mulva lejar'
                        price='500'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        description='MistyMC Lobby'
                        image={ <img src={ name } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas'
                        }}
                    />
                </div>
                 <div className="col-6 col-sm-12 mb">
                    <SettingsBox 
                        description='Automatikus megujitas'
                        image={ <img src={ reload } alt="goofyahh" /> }
                        button={{
                            text: 'Bekapcsolas'
                        }}
                    />
                </div>
            </div>
            <div className="row mb">
                <div className="col-12 mb">
                    <SettingsBox 
                        title='Subdomain'
                        description="skibidisigma.sharknode.hu"
                        image={ <img src={ domain } alt="goofyahh" /> }
                        button={{
                            text: 'Modositas'
                        }}
                    />
                </div>
            </div>
            <div className="align-items-center">
                <div className="row row-gap">
                    <Button 
                        text="Mentes"
                        type="secondary"
                    />
                    <Button 
                        text="Torles"
                        type="red"
                    />
                </div>
            </div>
        </div>
    )
}

export default ManagePage