import './select.scss'

type SelectProps = {

    placeholder: string
    options: string[]
    onChange: (str: string) => void

}

const Select = (props: SelectProps) => {
    const options = [
        props.placeholder,
        ...props.options,
    ]

    const changed = (str: string) => {
        if(str === props.placeholder) {
            props.onChange(null)
            return
        }

        props.onChange(str)
    }

    return (
        <select
            onChange={(e) => changed(e.target.value)}
            className="select"
        >
            {
                options.map(element => (
                    <option value={ element }>{ element }</option>
                ))
            }
        </select>
    )
}

export default Select