import { AbstractAction, RequestFactory, RequestMethod } from "magicauth-client";
import PanelAPI from "../http/PanelAPI";
import SuccessResponse from "../datatransfer/response/SuccessResponse";
import PurchasePlanRequest from "../datatransfer/request/PurchasePlanRequest";

class PurchasePlan extends AbstractAction<any, any> {

    public async execute(data: PurchasePlanRequest): Promise<any> {
        return await new RequestFactory()
            .url(PanelAPI.BUY_PLAN)
            .method(RequestMethod.POST)
            .body<PurchasePlanRequest>(data)
            .authorized()
            .retrieve()
                .then(response => {
                    const data = response.toMono<SuccessResponse>()

                    if(!data.body.success) {
                        throw new Error('internal_error')
                    }
                    
                    return { }
                })
    }

}

export default PurchasePlan