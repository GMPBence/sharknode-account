import AuthBox from '../components/auth-box/AuthBox'

const RecoverPasswordPage = () => {
    return (
        <AuthBox 
            title="ELFELEJTETT JELSZO"
            inputs={[
                {
                    type: 'password',
                    placeholder: 'jelszo'
                },
                {
                    type: 'password',
                    placeholder: 'jelszo ujra'
                }
            ]}
            button="mentes"
            links={[ ]}
        />
    )
}

export default RecoverPasswordPage