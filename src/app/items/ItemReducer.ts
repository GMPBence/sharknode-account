import { Action } from "../redux/Action"
import DefaultState from "../redux/DefaultState"
import Item from "./Item"

type State = DefaultState<Item[]>

const initialState: State = {
    state: undefined
}

const items = (state: State = initialState, action: Action): State => {
    switch(action.type) {
        case 'update-items':
            return {
                state: action.payload
            }

        default:
            return state
    }
}

export default items