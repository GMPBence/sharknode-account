import Button from '../button/Button'
import './welcome.scss'

type WelcomeProps = {

    username: string

}

const Welcome = (props: WelcomeProps) => {
    return (
        <div className='welcome'>
            <div className="welcome_title">
                <h1>Szép napot,</h1>
                <h3>{ props.username }!</h3>
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