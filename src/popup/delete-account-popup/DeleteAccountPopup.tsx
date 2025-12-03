import Button from '../../components/button/Button'

type DeleteProps = {

    onClick: () => void

}

const DeleteAccountPopup = (props: DeleteProps) => {
    const onClick = () => {
        props.onClick()
    }

    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-12 mb-sm">
                    <h3>FIÓK TÖRLÉSE</h3>
                    <p>
                        Biztosan törölni szeretnéd a fiókod? <br />
                        Ezzel az összes nálunk tárolt adatod, beleértve a szervereid is, örökké elvesznek. A gombra kattintás után kijelentkeztetünk és a fiókod 14 nap elteltével töröljuk. 
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

export default DeleteAccountPopup