import { ChangeEmailFlow, useAuth } from "magicauth-client"
import Button from "../../components/button/Button"

const EmailPopup = () => {
    const magic = useAuth()

    const onClick = () => {
        const flow = magic.flows().getFlow(ChangeEmailFlow)
        flow.email()
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <h3>EMAIL VALTOZTATAS</h3>
                    <p>Eloszor meg kell erositenunk a jelenlegi email cimedet, hogy tudjuk, biztos te vagy az</p>
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovabb'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default EmailPopup