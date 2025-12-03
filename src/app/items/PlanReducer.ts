import { Action } from "../redux/Action"
import DefaultState from "../redux/DefaultState"
import Plan from "./Plan"

type State = DefaultState<Plan[]>

const initialState: State = {
    state: undefined
}

const plans = (state: State = initialState, action: Action): State => {
    switch(action.type) {
        case 'update-plans':
            return {
                state: action.payload
            }

        case 'remove-plans':
            return {
                state: undefined
            }

        default:
            return state
    }
}

export default plans