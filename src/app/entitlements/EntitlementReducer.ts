import Entitlements from "./Entitlements"
import { Action } from "../redux/Action"
import Entitlement from "./Entitlement"

const initialState: Entitlements = {
    state: undefined
}

const entitlements = (state: Entitlements = initialState, action: Action): Entitlements => {
    switch(action.type) {
        case 'update-entitlements':
            return {
                state: action.payload
            }

        case 'update-entitlement':
            const entitlement: Entitlement = action.payload
            const newState = state.state.filter(e => e.id != entitlement.id)

            newState.push(entitlement)

            return {
                state: newState
            }

        case 'delete-entitlement':
            return {
                state: state.state.filter(e => e.id != action.payload)
            }

        default:
            return state
    }
}

export default entitlements