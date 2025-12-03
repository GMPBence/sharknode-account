import { AnyAction } from "@reduxjs/toolkit"
import { Action } from "../redux/Action"
import DefaultState from "../redux/DefaultState"
import Entitlement from "./Entitlement"

type State = DefaultState<Entitlement[]>

const initialState: State = {
    state: undefined
}

const entitlements = (state: State = initialState, action: Action): State => {
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