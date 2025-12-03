import { UserServices } from "magicauth-client";
import EntitlementService from "./impl/EntitlementService";
import ItemService from "./impl/ItemService";
import PlanService from "./impl/PlanService";

class SharkServices extends UserServices {

    private entitlements: EntitlementService
    private items: ItemService
    private plans: PlanService

    public createServices(): void {
        this.entitlements = new EntitlementService()
        this.items = new ItemService()
        this.plans = new PlanService()
    }
    public removeServices(): void {
        this.entitlements = null
        this.items = null
        this.plans = null
    }

    public getEntitlements() {
        return this.entitlements
    }
    public getItems() {
        return this.items
    }
    public getPlans() {
        return this.plans
    }

}

export default SharkServices