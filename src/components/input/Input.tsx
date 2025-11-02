import './input.scss'

type InputProps = {

    type: string
    placeholder?: string

}

const Input = (props: InputProps) => {
    return (
        <input className='input' type={ props.type } placeholder={ props.placeholder } />
    )
}

export default Input