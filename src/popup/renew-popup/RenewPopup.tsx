import { Link } from "react-router"
import Button from "../../components/button/Button"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"

type RenewProps = {

    name: string
    price: number
    renew: () => void

}

const RenewPopup = (props: RenewProps) => {
    const [ loading, setLoading ] = useState(false)

    const onClick = async () => {
        setLoading(true)
        await props.renew()

        window.closePopup()
    }

    if(loading) {
        return (
            <div className='col-12'>
                <div className="align-items-center">
                    <TailSpin
                        width="45"
                        color="white"
                    />
                </div>
            </div>
        )
    }
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <h3>{ props.name.toUpperCase() } - HOSSZABBÍTÁS</h3>
                    <p>
                        Biztosan szeretnéd hosszabbítani ezt a szervert? <br />
                        Ez a művelet { props.price } SharkCoin-ba fog kerülni, 
                        és 6 órával fogja hosszabbítani szervered elérhetőségét.
                    </p>
                </div>
            </div>
            <div className="align-items-center">
                <div className="row row-gap row-center">
                    <Button 
                        type='primary'
                        text='Hosszabbítás'
                        onClick={ onClick }
                    />
                </div>
            </div>
        </div>
    )
}

export default RenewPopup