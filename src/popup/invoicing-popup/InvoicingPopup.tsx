import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

const InvoicingPopup = () => {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='Teljes nev'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='Orszag'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='Megye, tartomany'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-12 mb">
                    <Input 
                        type='text'
                        placeholder='Telepules'
                    />
                </div>
                <div className="col-6 col-sm-12 mb">
                    <Input 
                        type='text'
                        placeholder='Hazszam'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='Adoszam (opcionalis)'
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Mentes'
                />
            </div>
        </div>
    )
}

export default InvoicingPopup