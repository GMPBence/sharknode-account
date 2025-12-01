import { UserService } from "magicauth-client";
import store from "../redux/Store";

abstract class ReduxService<T> extends UserService {

    private action: string

    constructor(action: string) {
        super()
        this.action = action
    }

    public abstract doRetrieve(): Promise<T>

    public async retrieve() {
        const data = await this.doRetrieve()

        store.dispatch({
            type: this.action,
            payload: data
        })
    }

}

export default ReduxService