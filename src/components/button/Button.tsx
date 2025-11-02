import './button.scss'

type ButtonProps = {

    text: string
    type: 'primary' | 'secondary' | 'red'
    onClick?: () => void

}

const Button = (props: ButtonProps) => {
    if(props.type === 'primary')
    return (
        <button className='button button-primary' onClick={ props.onClick }>{ props.text }</button>
    )

    if(props.type === 'secondary')
    return (
        <button className='button button-secondary' onClick={ props.onClick }>{ props.text }</button>
    )

    if(props.type === 'red')
    return (
        <button className='button button-red' onClick={ props.onClick }>{ props.text }</button>
    )
}

export default Button