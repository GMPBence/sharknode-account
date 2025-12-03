import React from 'react'
import Button from '../../components/button/Button'

type DeleteProps = {

    onClick: () => void

}

const DeleteServerPopup = (props: DeleteProps) => {
    const onClick = () => {
        props.onClick()
        window.closePopup()
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb-sm">
                    <h3>SZERVER TÖRLÉSE</h3>
                    <p>
                        Biztosan törölni szeretnéd ezt a szervert? <br />
                        Ez a művelet visszafordíthatatlan és a szerver összes adata örökké elvész.
                    </p>
                </div>
            </div>
            <div className="align-items-center">
                <Button 
                    type='red'
                    text='Törlés'
                    onClick={ onClick }
                />
            </div>
        </div>
    )
}

export default DeleteServerPopup