import { AbstractAction } from "magicauth-client";
import Entitlement from "../entitlements/Entitlement";
import DefaultAction from "../redux/DefaultAction";
import Util from "../util/Util";

type ReduxAction = DefaultAction<'update-entitlement', Entitlement>

class RenewEntitlement extends AbstractAction<Entitlement, ReduxAction> {

    public async execute(data: Entitlement): Promise<ReduxAction> {
        let ent: Entitlement = Util.copy(data)

        ent.expiresAt = Util.timestamp() + 10
        ent.expired = false

        return {
            type: 'update-entitlement',
            payload: ent
        }
    }

}

export default RenewEntitlement