import { AbstractAction, ErrorCodec, UserService } from "magicauth-client";
import store from "../redux/Store";
import ActionSet from "./action/ActionSet";
import ActionEvent from "./action/ActionEvent";

abstract class ReduxService<T> extends UserService {

    private actions: ActionSet
    private errors: ErrorCodec

    constructor(actions: ActionSet, errors: ErrorCodec) {
        super()
        this.actions = actions
        this.errors = errors
    }

    public async initialize() {
        try {
            const data = await this.actions.fireActionE(ActionEvent.LOAD)
            this.mutate(data.payload)

            store.dispatch(data)
        } catch(error: any) {
            this.errors.execute(error.message)
        }
    }
    protected mutate(data: any) {
    }

    public async callAction(name: string, data?: any) {
        try {
            const action = await this.actions.fireActionN(name, data)

            if(action.type) {
                return store.dispatch(action)
            }
            return action
        } catch(error: any) {
            this.errors.execute(error.message)
        }
    }

    protected dispatch(action: string, payload?: any) {
        store.dispatch({
            type: action,
            payload
        })
    }

}

export default ReduxService