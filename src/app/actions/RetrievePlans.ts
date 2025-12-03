import { AbstractAction, RequestFactory, RequestMethod } from "magicauth-client";
import DefaultAction from "../redux/DefaultAction";
import PanelAPI from "../http/PanelAPI";
import PlansResponse from "../datatransfer/response/PlansResponse";
import Plan from "../items/Plan";

type ReduxAction = DefaultAction<'update-plans', Plan[]>

class RetrievePlans extends AbstractAction<any, ReduxAction> {

    public async execute(id: string): Promise<ReduxAction> {
        return await new RequestFactory()
            .url(PanelAPI.GET_PLANS)
            .method(RequestMethod.POST)
            .authorized()
            .body({
                category_id: id
            })
            .retrieve()
                .then(response => {
                    const data = response.toMono<PlansResponse>()
                    
                    return {
                        type: 'update-plans',
                        payload: data.body.plans
                    }
                })
    }

}

export default RetrievePlans