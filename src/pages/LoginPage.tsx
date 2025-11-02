import AuthBox from "../components/auth-box/AuthBox"

const LoginPage = () => {
    return (
        <AuthBox 
            title="BEJELENTKEZES"
            inputs={[
                {
                    type: 'text',
                    placeholder: 'felhasznalonev'
                },
                {
                    type: 'text',
                    placeholder: 'jelszo'
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

export default LoginPage