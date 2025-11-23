import type React from 'react'
import Button from '../button/Button'
import './settings-box.scss'

type SettingsBoxProps = {

    button: {
        text: string
        onClick?: () => void
    }

    image: React.ReactElement
    title?: string
    description?: string

}

const SettingsBox = (props: SettingsBoxProps) => {
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
                <Button text={ props.button.text } type='secondary' onClick={ props.button.onClick } />
            </div>
        </div>
    )
}

export default SettingsBox