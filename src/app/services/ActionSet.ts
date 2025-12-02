import { AbstractAction } from "magicauth-client"
import ActionEvent from "./ActionEvent"

type Action = () => AbstractAction<any, any>

class ActionSet {

    private actionsByEvent: Map<ActionEvent, string> = new Map()
    private actionsByName: Map<string, Action> = new Map()

    public addAction(event: ActionEvent, name: string, action: Action) {
        if(event !== null) {
            this.actionsByEvent.set(event, name)
        }
        this.actionsByName.set(name, action)
        return this
    }

    public async fireActionN(name: string, data?: string) {
        const action = this.actionsByName.get(name)
        return await action().execute(data)
    }

    public async fireActionE(event: ActionEvent, data?: any) {
        const name = this.actionsByEvent.get(event)
        return await this.fireActionN(name)
    }

    public static create() {
        return new ActionSet()
    }

}

export default ActionSet