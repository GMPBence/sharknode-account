import React, { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

type ServerProps = {

    title: string
    onChange: (name: string) => void
    
}

const ServerPropsPopup = (props: ServerProps) => {
    const [ text, setText ] = useState('')

    const onClick = () => {
        window.closePopup()
        props.onChange(text)
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12">
                    <h3>{ props.title.toUpperCase() }</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb">
                    <Input 
                        type='text'
                        placeholder={ props.title }
                        onChange={ setText }
                    />
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='primary'
                    text='Mentés'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default ServerPropsPopup