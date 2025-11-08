import Button from '../button/Button'
import './welcome.scss'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className="welcome_title">
                <h1>Szep napot,</h1>
                <h3>kbence01!</h3>
            </div>
            <div className="welcome_actions">
                <Button 
                    type='primary'
                    text='Game Panel'
                />
                <Button 
                    type='primary'
                    text='Szervereim'
                />
                <Button 
                    type='primary'
                    text='Coin Szerzés'
                />
            </div>
        </div>
    )
}

export default Welcome