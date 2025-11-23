import { HashHistory } from "history"

class Router {

    private history: HashHistory

    constructor(history: HashHistory) {
        this.history = history
    }

    public assign(uri: string) {
        this.history.push(uri)
    }

}

export default Router