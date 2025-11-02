import type React from 'react'
import './icon-text.scss'

type IconTextProps = {

    icon: React.ReactElement
    title: string
    description: string
    color: 'red' | 'green'

}

const IconText = (props: IconTextProps) => {
    return (
        <div className='icon-text'>
            <div className={ "icon-text_icon icon-text_icon-" + props.color }>
                { props.icon }
            </div>
            <div className="icon-text_text">
                <h6>{ props.description }</h6>
                <h4>{ props.title }</h4>
            </div>
        </div>
    )
}

export default IconText