import { AbstractAction, RequestFactory, RequestMethod } from "magicauth-client";
import Entitlement from "../entitlements/Entitlement";
import DefaultAction from "../redux/DefaultAction";
import Util from "../util/Util";
import PanelAPI from "../http/PanelAPI";
import SuccessResponse from "../datatransfer/response/SuccessResponse";
import RenewResponse from "../datatransfer/response/RenewResponse";

type ReduxAction = DefaultAction<'update-entitlement', Entitlement>

class RenewEntitlement extends AbstractAction<Entitlement, ReduxAction> {

    public async execute(entitlement: Entitlement): Promise<ReduxAction> {
        return await new RequestFactory()
            .url(PanelAPI.RENEW_ENTITLEMENT)
            .method(RequestMethod.POST)
            .body({
                service_id: entitlement.id
            })
            .authorized()
            .retrieve()
                .then(response => {
                    const data = response.toMono<RenewResponse>()
                    
                    if(!data.body.expires_at) {
                        throw new Error('internal_error')
                    }

                    const ent: Entitlement = Util.copy(entitlement)

                    ent.expiresAt = data.body.expires_at
                    ent.expired = false

                    return {
                        type: 'update-entitlement',
                        payload: ent
                    }
                })
    }

}

export default RenewEntitlement