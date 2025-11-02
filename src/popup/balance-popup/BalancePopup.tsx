import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

const BalancePopup = () => {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>EGYENLEGFELTOLTES</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder='Mennyit szeretnel feltolteni?'
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Feltoltes'
                />
            </div>
        </div>
    )
}

export default BalancePopup