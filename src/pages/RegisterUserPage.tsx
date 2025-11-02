import AuthBox from '../components/auth-box/AuthBox'

const RegisterUserPage = () => {
    return (
        <AuthBox 
            title="REGISZTRACIO"
            inputs={[
                {
                    type: 'text',
                    placeholder: 'felhasznalonev'
                },
                {
                    type: 'email',
                    placeholder: 'email cim'
                }
            ]}
            button="kovetkezo"
            links={[
                {
                    url: '/',
                    name: 'bejelentkezes'
                }
            ]}
        />
    )
}

export default RegisterUserPage