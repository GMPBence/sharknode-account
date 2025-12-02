import './button.scss'

type ButtonProps = {

    text: string
    type: string
    disabled?: boolean
    onClick?: () => void

}

const Button = (props: ButtonProps) => {
    if(props.type === 'primary')
    return (
        <button className='button button-primary' onClick={ props.onClick } disabled={ props.disabled }>{ props.text }</button>
    )

    if(props.type === 'secondary')
    return (
        <button className='button button-secondary' onClick={ props.onClick } disabled={ props.disabled }>{ props.text }</button>
    )

    if(props.type === 'red')
    return (
        <button className='button button-red' onClick={ props.onClick } disabled={ props.disabled }>{ props.text }</button>
    )

    if(props.type === 'green')
    return (
        <button className='button button-green' onClick={ props.onClick } disabled={ props.disabled }>{ props.text }</button>
    )
}

export default Button