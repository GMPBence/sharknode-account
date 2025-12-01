import { HashHistory } from "history"
import Router from "./router/Router"
import Images from "./util/Images"

class SharkNode {

    private static router: Router

    private static images: Images

    public static initialize() {
        this.images = new Images()
    }

    public static history(history: HashHistory) {
        this.router = new Router(history)
    }
    public static getRouter() {
        return this.router
    }

    public static getImages() {
        return this.images
    }

}

export default SharkNode