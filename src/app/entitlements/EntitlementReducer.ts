import Entitlements from "./Entitlements"
import { Action } from "../redux/Action"

const initialState: Entitlements = {
    state: [ ]
}

const entitlements = (state: Entitlements = initialState, action: Action): Entitlements => {
    console.log('Dispatched1', action.type)
    
    switch(action.type) {
        case 'update-entitlements':
            return {
                state: action.payload
            }

        default:
            return state
    }
}

export default entitlements