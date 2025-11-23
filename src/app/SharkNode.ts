import { HashHistory } from "history"
import Router from "./router/Router"

class SharkNode {

    private static router: Router

    public static initialize() {
        
    }

    public static history(history: HashHistory) {
        this.router = new Router(history)
    }

    public static getRouter() {
        return this.router
    }

}

export default SharkNode