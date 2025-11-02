import type React from 'react'
import './box.scss'

type BoxProps = {

    children: React.ReactNode
    
}

const Box = (props: BoxProps) => {
    return (
        <div className='box'>
            { props.children }
        </div>
    )
}

export default Box