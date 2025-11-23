import AuthBox from "../../components/auth-box/AuthBox"
import AuthSlideIn from "../../components/AuthSlideIn"

const TFALoginPage = () => {
    return (
        <AuthSlideIn key="step0">
            <AuthBox 
                title="BEJELENTKEZES - 2FA"
                inputs={[
                    {
                        type: 'text',
                        placeholder: '6 jegyu kod'
                    }
                ]}
                button="bejelentkezes"
                links={[
                    {
                        url: '/register',
                        name: 'regisztracio'
                    },
                    {
                        url: '/recover',
                        name: 'elfelejtett jelszo'
                    }
                ]}
            />
        </AuthSlideIn>
    )
}

export default TFALoginPage