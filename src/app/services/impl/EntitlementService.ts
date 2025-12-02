import { ErrorCodec, MagicAuth } from "magicauth-client";
import Entitlement from "../../entitlements/Entitlement";
import store from "../../redux/Store";
import Toaster from "../../util/Toaster";
import Util from "../../util/Util";
import ReduxService from "../ReduxService";
import ActionSet from "../ActionSet";
import ActionEvent from "../ActionEvent";
import UpdateEntitlement from "../../actions/impl/UpdateEntitlement";
import RetrieveEntitlement from "../../actions/impl/RetrieveEntitlement";
import DeleteEntitlement from "../../actions/impl/DeleteEntitlement";
import RenewEntitlement from "../../actions/impl/RenewEntitlement";

class EntitlementService extends ReduxService<Entitlement[]> {

    private timeouts: Map<string, any> = new Map()

    constructor() {
        super(
            ActionSet.create()
                .addAction(
                    ActionEvent.LOAD, 
                    'update-entitlements', 
                    () => new RetrieveEntitlement()
                )
                .addAction(
                    null,
                    'update-entitlement',
                    () => new UpdateEntitlement()
                )
                .addAction(
                    null,
                    'delete-entitlement',
                    () => new DeleteEntitlement()
                )
                .addAction(
                    null,
                    'renew-entitlement',
                    () => new RenewEntitlement()
                ),

            ErrorCodec.create()
                .add('renew_failed', () => {
                    Toaster.toastError('Nem sikerült hosszabbítani a szervered.')
                })
                .default(() => {
                    Toaster.toastError('Kérlek próbáld újra később.')
                })
        )
    }

    protected mutate(data: Entitlement[]): void {
        data.forEach(ent => {
            window.clearTimeout(this.timeouts.get(ent.id))
            const expiresIn = ent.expiresAt - Util.timestamp()

            this.timeouts.set(
                ent.id, 
                setTimeout(() => 
                    this.checkExpired(ent.id), 
                expiresIn * 1000)
            )
        })
    }

    public update(ent: Entitlement) {
        this.callAction('update-entitlement', ent)
        console.log(ent)
    }

    public delete(id: string) {
        this.callAction('delete-entitlement', id)
    }

    public async renew(ent: Entitlement) {
        const action = await this.callAction('renew-entitlement', ent)
        this.mutate([ action.payload ])
    }

    private async checkExpired(id: string) {
        const ent = store.getState().entitlements.state.filter(element => element.id)[0]
        if(!ent) {
            return
        }

        if(ent.autoRenew) {
            const user = MagicAuth.getUser()
            if(user.coins >= ent.price) {
                const entitlement = Util.copy(ent)

                entitlement.expired = false
                entitlement.expiresAt = Util.timestamp() + 10

                this.dispatch(
                    'update-entitlement', 
                    entitlement
                )

                this.mutate([ entitlement ])

                Toaster.toastSuccess('Sikeresen meghosszabbítottuk ezt: ' + ent.name)
                return
            }
        }

        this.expire(ent)
    }
    public expire(ent: Entitlement) {
        const entitlement = Util.copy(ent)
        entitlement.expired = true

        this.dispatch(
            'update-entitlement', 
            entitlement
        )

        Toaster.toastError('A(z) ' + ent.name + ' nevű szervered éppen most járt le. Újítsd meg!')
    }

}

export default EntitlementService