import { ErrorCodec } from "magicauth-client";
import RetrievePlans from "../../actions/RetrievePlans";
import Plan from "../../items/Plan";
import ActionEvent from "../action/ActionEvent";
import ActionSet from "../action/ActionSet";
import ReduxService from "../ReduxService";
import Toaster from "../../util/Toaster";
import Item from "../../items/Item";
import PurchasePlan from "../../actions/PurchasePlan";
import PurchasePlanRequest from "../../datatransfer/request/PurchasePlanRequest";

class PlanService extends ReduxService<Plan[]> {

    private selected: Item
    private plan: Plan

    constructor() {
        super(
            ActionSet.create()
                .addAction(
                    ActionEvent.INTERACT, 
                    'update-plans', 
                    () => new RetrievePlans()
                )
                .addAction(
                    ActionEvent.INTERACT, 
                    'purchase-plan', 
                    () => new PurchasePlan()
                ),

            ErrorCodec.create()
                .add('coin', () => {
                    Toaster.toastError('Nincs elég SharkCoin-od a vásárláshoz.')
                })
                .default(() => {
                    Toaster.toastError('Kérlek próbáld újra később.')
                })
        )
    }

    public retrieveForItem(item: Item) {
        this.selected = item
        
        this.callAction('update-plans', item.id)
    }

    public removePlans() {
        this.dispatch('remove-plans')
    }

    public selectPlan(plan: Plan) {
        this.plan = plan
    }

    public async purchasePlan(name: string, subdomain: string, version: string) {
        console.log('PURCHASE', name, subdomain, version)
        console.log(this.plan)
        await this.callAction(
            'purchase-plan', 
            {
                
                plan_id: this.plan.id,
                server_name: name,
                subdomain,
                minecraft_version: version

            }
        )
    }

    public getSelected() {
        return this.selected
    }

}

export default PlanService