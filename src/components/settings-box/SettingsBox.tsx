import type React from 'react'
import Button from '../button/Button'
import './settings-box.scss'

type SettingsBoxProps = {

    button: {
        text: string
        type?: string
        onClick?: () => void
    }

    image: React.ReactElement
    title?: string
    description?: string

}

const SettingsBox = (props: SettingsBoxProps) => {
    const type = props.button.type ? props.button.type : 'secondary'

    return (
        <div className='settings-box'>
            <div className="settings-box_left">
                { props.image }
                {
                    props.title ?
                        <h4>{ props.title }</h4>
                    : null
                }
                <h5>{ props.description }</h5>
            </div>
            <div className="settings-box_right">
                <Button text={ props.button.text } type={ type } onClick={ props.button.onClick } />
            </div>
        </div>
    )
}

export default SettingsBox