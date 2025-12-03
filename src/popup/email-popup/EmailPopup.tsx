import { ChangeEmailFlow, useAuth } from "magicauth-client"
import Button from "../../components/button/Button"
import { TailSpin } from "react-loader-spinner"

const EmailPopup = () => {
    const magic = useAuth()

    const onClick = () => {
        const flow = magic.flows().getFlow(ChangeEmailFlow)
        flow.email()
    }

    if(magic.isLoading) {
        return (
            <div className='col-12'>
                <div className="row">
                    <div className="col-12">
                        <h3>EMAIL VÁLTOZTATÁS</h3>
                    </div>
                </div>
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
                    <h3>EMAIL VÁLTOZTATÁS</h3>
                    <p>Először meg kell erősítenünk a jelenlegi email címedet, hogy tudjuk, biztos te vagy az.</p>
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Tovább'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default EmailPopup