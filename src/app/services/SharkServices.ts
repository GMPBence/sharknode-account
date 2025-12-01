import { UserServices } from "magicauth-client";
import EntitlementService from "./impl/EntitlementService";

class SharkServices extends UserServices {

    private entitlements: EntitlementService

    public createServices(): void {
        this.entitlements = new EntitlementService()
    }
    public removeServices(): void {
        this.entitlements = null
    }

    public getEntitlements() {
        return this.entitlements
    }

}

export default SharkServices