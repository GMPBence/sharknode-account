import ExpiringServer from '../components/expiring-server/ExpiringServer'
import ServerBox from '../components/server-box/ServerBox'

const YourServicesPage = () => {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <ExpiringServer 
                        name='MistyMC Lobby'
                        date='01:56 mulva lejar'
                        price='500'
                        onClick={( ) => {}}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="row row-gap">
                    <ServerBox />
                    <ServerBox />
                    <ServerBox />
                </div>
            </div>
        </div>
    )
}

export default YourServicesPage