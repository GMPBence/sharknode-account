import React from 'react'
import ExpiringService from '../components/expiring-service/ExpiringService'
import ServiceBox from '../components/service-box/ServiceBox'

const YourServicesPage = () => {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <ExpiringService 
                        name='MistyMC Lobby'
                        date='01:56 mulva lejar'
                        price='500'
                        onClick={( ) => {}}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="row row-gap">
                    <ServiceBox />
                    <ServiceBox />
                    <ServiceBox />
                </div>
            </div>
        </div>
    )
}

export default YourServicesPage