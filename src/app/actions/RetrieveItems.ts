import { AbstractAction, RequestFactory, RequestMethod, Util } from "magicauth-client";
import DefaultAction from "../redux/DefaultAction";
import Entitlement from "../entitlements/Entitlement";
import PanelAPI from "../http/PanelAPI";
import EntitlementsResponse from "../datatransfer/response/EntitlementsResponse";
import Item from "../items/Item";
import ItemsResponse from "../datatransfer/response/ItemsResponse";

type ReduxAction = DefaultAction<'update-items', Item[]>

class RetrieveItems extends AbstractAction<any, ReduxAction> {

    public async execute(): Promise<ReduxAction> {
        return await new RequestFactory()
            .url(PanelAPI.GET_ITEMS)
            .method(RequestMethod.GET)
            .authorized()
            .retrieve()
                .then(response => {
                    const data = response.toMono<ItemsResponse>()
                    
                    return {
                        type: 'update-items',
                        payload: data.body.categories
                    }
                })
    }

}

export default RetrieveItems