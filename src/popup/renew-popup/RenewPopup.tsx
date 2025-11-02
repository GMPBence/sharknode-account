import { Link } from "react-router"
import Button from "../../components/button/Button"

const RenewPopup = () => {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <h3>PROMC - MEGUJITAS</h3>
                    <p>
                        Biztosan szeretned megujitani???? <br />
                        Ez a muvelet 2,500 Forintba fog fajni. <br />
                        Ez az osszeg az egyenlegedbol kerul levonasra
                    </p>
                </div>
            </div>
            <div className="align-items-center">
                <div className="row row-gap row-center">
                    <Link to=""><p>Megse</p></Link>
                    <Button 
                        type='primary'
                        text='Feltoltes'
                    />
                </div>
            </div>
        </div>
    )
}

export default RenewPopup