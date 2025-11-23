import './auth-box.scss'
import Input from '../input/Input'
import Button from '../button/Button'
import { Link } from 'react-router'

type AuthBoxProps = {
    
    title: string
    inputs: {
        type: string
        placeholder: string,
        onChange?: (str: string) => void
    }[]
    button: string
    onDone?: () => void
    links: {
        name: string
        url: string
    }[]

}

const AuthBox = (props: AuthBoxProps) => {
    return (
        <div className='auth-box'>
            <h1>{ props.title }</h1>
            {
                props.inputs.map(input => (
                    <Input 
                        type={ input.type } 
                        placeholder={ input.placeholder } 
                        onChange={ (str) => {
                            if(input.onChange) {
                                input.onChange(str)
                            }
                        }} />
                ))
            }
            <div className='align-items-center'>
                <Button 
                    type='primary' 
                    text={ props.button } 
                    onClick={ props.onDone } 
                />
            </div>
            <div className="auth-box_links">
                {
                    props.links.map(link => (
                        <Link to={ link.url }><p>{ link.name }</p></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AuthBox