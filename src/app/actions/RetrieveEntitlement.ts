import { AbstractAction, RequestFactory, RequestMethod, Util } from "magicauth-client";
import DefaultAction from "../redux/DefaultAction";
import Entitlement from "../entitlements/Entitlement";
import PanelAPI from "../http/PanelAPI";
import EntitlementsResponse from "../datatransfer/response/EntitlementsResponse";

type ReduxAction = DefaultAction<'update-entitlements', Entitlement[]>

class RetrieveEntitlement extends AbstractAction<any, ReduxAction> {

    public async execute(): Promise<ReduxAction> {
        
        return await new RequestFactory()
            .url(PanelAPI.GET_ENTITLEMENTS)
            .method(RequestMethod.GET)
            .authorized()
            .retrieve()
                .then(response => {
                    const data = response.toMono<EntitlementsResponse>()

                    // todo do this in backend
                    data.body.services[0].expiresAt = Math.round(data.body.services[0].expiresAt / 1000)
                    
                    return {
                        type: 'update-entitlements',
                        payload: data.body.services
                    }
                })

        return {
            type: 'update-entitlements',
            payload: [{
            id: 'dg',
            name: 'MistyMC',
            properties: {
                type: 'minecraft-spigot',
                typeName: 'Minecraft Spigot',
                planName: 'Alap',
                ram: '8',
                cpu: '2',
                disk: '12'
            },
            expired: false,
            expiresAt: Util.timestamp() + 60 * 60 * 6,
            price: 0,
            autoRenew: true,
            subdomain: 'skibidisigma'
        }]
        }
    }

}

export default RetrieveEntitlement