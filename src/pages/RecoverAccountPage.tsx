import AuthBox from '../components/auth-box/AuthBox'

const RecoverAccountPage = () => {
    return (
        <AuthBox 
            title="ELFELEJTETT JELSZO"
            inputs={[
                {
                    type: 'email',
                    placeholder: 'email'
                }
            ]}
            button="kuldes"
            links={[
                {
                    url: '/',
                    name: 'bejelentkezes'
                },
                {
                    url: '/register',
                    name: 'regisztracio'
                }
            ]}
        />
    )
}

export default RecoverAccountPage