import Entitlement from "../../entitlements/Entitlement";
import Util from "../../util/Util";
import ReduxService from "../ReduxService";

class EntitlementService extends ReduxService<Entitlement[]> {

    constructor() {
        super('update-entitlements')
    }

    // TODO: retrieve from api
    public async doRetrieve(): Promise<Entitlement[]> {
        return [{
            id: 'dg',
            name: 'MistyMC',
            properties: {
                type: 'minecraft-spigot',
                plan: 'default',
                ram: '8',
                cpu: '2',
                hdd: '12'
            },
            expired: false,
            expiresAt: Util.timestamp() + 100,
            price: 500,
            autoRenew: false,
            subdomain: 'skibidisigma'
        }]
    }

}

export default EntitlementService