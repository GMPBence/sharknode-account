import './input.scss'

type InputProps = {

    type: string
    placeholder?: string
    onChange: (str: string) => void

}

const Input = (props: InputProps) => {
    return (
        <input className='input' key={ props.placeholder } type={ props.type } placeholder={ props.placeholder } onChange={ (e) => props.onChange!(e.target.value) } />
    )
}

export default Input