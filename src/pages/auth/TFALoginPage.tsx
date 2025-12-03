import AuthBox from "../../components/auth-box/AuthBox"
import AuthSlideIn from "../../components/AuthSlideIn"

const TFALoginPage = () => {
    return (
        <AuthSlideIn key="step0">
            <AuthBox 
                title="BEJELENTKEZÉS - 2FA"
                inputs={[
                    {
                        type: 'text',
                        placeholder: '2fa kód'
                    }
                ]}
                button="bejelentkezés"
                links={[
                    {
                        url: '/register',
                        name: 'regisztráció'
                    },
                    {
                        url: '/recover',
                        name: 'elfelejtett jelszó'
                    }
                ]}
            />
        </AuthSlideIn>
    )
}

export default TFALoginPage