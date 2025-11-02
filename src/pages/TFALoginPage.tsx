import AuthBox from "../components/auth-box/AuthBox"

const TFALoginPage = () => {
    return (
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
    )
}

export default TFALoginPage