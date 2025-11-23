import { Slide, toast } from "react-toastify"

class Toaster {

    public static toastSuccess(text: string): void {
        toast(text, {
            containerId: 'center',
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
            style: {
                borderRadius: 30,
                background: '#2C2C2C',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                fontSize: '20px',
                boxShadow: '0px 0px 0px 6px #3ed355ff'
            },
            closeButton: false,
            theme: "dark"
        });
    }

    public static toastError(text: string): void {
        toast(text, {
            containerId: "center",
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
            style: {
                borderRadius: 30,
                background: '#2C2C2C',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                fontSize: '20px',
                boxShadow: '0px 0px 0px 6px #EA1E62'
            },
            closeButton: false,
            theme: "dark"
        });
    }

}

export default Toaster