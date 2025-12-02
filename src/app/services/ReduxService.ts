import { AbstractAction, ErrorCodec, UserService } from "magicauth-client";
import store from "../redux/Store";
import ActionSet from "./ActionSet";
import ActionEvent from "./ActionEvent";

abstract class ReduxService<T> extends UserService {

    private init = false

    private actions: ActionSet
    private errors: ErrorCodec

    constructor(actions: ActionSet, errors: ErrorCodec) {
        super()
        this.actions = actions
        this.errors = errors
    }

    //public abstract doRetrieve(): Promise<T>

    public async initialize() {
        if(this.init) {
            return
        }
        this.init = true
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
            return store.dispatch(action)
        } catch(error: any) {
            this.errors.execute(error.message)
        }
    }

    protected dispatch(action: string, payload: any) {
        store.dispatch({
            type: action,
            payload
        })
    }

}

export default ReduxService