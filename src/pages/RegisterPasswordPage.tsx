import AuthBox from "../components/auth-box/AuthBox"

const RegisterPasswordPage = () => {
    return (
        <AuthBox 
            title="REGISZTRACIO"
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
            button="regisztracio"
            links={[ ]}
        />
    )
}

export default RegisterPasswordPage