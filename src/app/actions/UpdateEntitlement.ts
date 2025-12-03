import { AbstractAction, RequestFactory, RequestMethod } from "magicauth-client";
import DefaultAction from "../redux/DefaultAction";
import Entitlement from "../entitlements/Entitlement";
import PanelAPI from "../http/PanelAPI";
import UpdateEntRequest from "../datatransfer/request/UpdateEntRequest";
import SuccessResponse from "../datatransfer/response/SuccessResponse";
import Util from "../util/Util";

type ReduxAction = DefaultAction<'update-entitlement', Entitlement>

class UpdateEntitlement extends AbstractAction<Entitlement, ReduxAction> {

    public async execute(ent: Entitlement): Promise<ReduxAction> {
        /*return await new RequestFactory()
            .url(PanelAPI.UPDATE_ENTITLEMENT)
            .method(RequestMethod.POST)
            .body<UpdateEntRequest>({
                service_id: ent.id,
                server_name: ent.name,
                automatic_renew: ent.autoRenew,
                subdomain: ent.subdomain
            })
            .authorized()
            .retrieve()
                .then(response => {
                    const data = response.toMono<SuccessResponse>()
                    if(!data.body.success) {
                        throw new Error('internal_error')
                    }

                    return {
                        type: 'update-entitlement',
                        payload: Util.copy(ent)
                    }
                })*/

        return {
                        type: 'update-entitlement',
                        payload: ent
                    }
    }

}

export default UpdateEntitlement