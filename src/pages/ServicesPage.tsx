import ServiceBox from '../components/service-box/ServiceBox'

const ServicesPage = () => {
    return (
        <div className='col-12'>
            <div className="row row-center row-gap">
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
            </div>
        </div>
    )
}

export default ServicesPage