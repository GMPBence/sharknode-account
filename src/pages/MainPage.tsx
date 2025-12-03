import { useAuth } from "magicauth-client"
import Welcome from "../components/welcome/Welcome"
import Select from "../components/select/Select"

const MainPage = () => {
    const magic = useAuth()

    return (
        <div className="align-items-center">
            <Welcome username={ magic.user.username } />
        </div>
    )
}

export default MainPage