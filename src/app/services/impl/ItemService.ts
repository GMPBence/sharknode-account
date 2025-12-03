import { ErrorCodec, MagicAuth } from "magicauth-client";
import RetrieveItems from "../../actions/RetrieveItems";
import Item from "../../items/Item";
import ActionEvent from "../action/ActionEvent";
import ActionSet from "../action/ActionSet";
import ReduxService from "../ReduxService";
import Toaster from "../../util/Toaster";
import SharkServices from "../SharkServices";

class ItemService extends ReduxService<Item[]> {

    private initied: boolean = false

    constructor() {
        super(
            ActionSet.create()
                .addAction(ActionEvent.LOAD, 'update-items', () => new RetrieveItems()),
            
            ErrorCodec.create()
                .default(() => {
                    Toaster.toastError('Kérlek próbáld újra később.')
                })
        )
    }

    public async initialize() {
        if(this.initied) {
            return
        }
        this.initied = true
        super.initialize()
    }

    public selectItem(item: Item) {
        const service = MagicAuth.getUserServices<SharkServices>().getPlans()
    
        service.removePlans()
        service.retrieveForItem(item)
    }

}

export default ItemService