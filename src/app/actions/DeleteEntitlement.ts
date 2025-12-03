import { AbstractAction, RequestFactory, RequestMethod } from "magicauth-client";
import PanelAPI from "../http/PanelAPI";
import SuccessResponse from "../datatransfer/response/SuccessResponse";
import DefaultAction from "../redux/DefaultAction";

type ReduxAction = DefaultAction<'delete-entitlement', string>

class DeleteEntitlement extends AbstractAction<string, ReduxAction> {

    public async execute(id: string): Promise<ReduxAction> {
        return await new RequestFactory()
            .url(PanelAPI.DELETE_ENTITLEMENT)
            .method(RequestMethod.POST)
            .body({
                service_id: id
            })
            .authorized()
            .retrieve()
                .then(response => {
                    const data = response.toMono<SuccessResponse>()
                    if(!data.body.success) {
                        throw new Error('internal_error')
                    }

                    return {
                        type: 'delete-entitlement',
                        payload: id
                    }
                })

        return {
                        type: 'delete-entitlement',
                        payload: id
                    }
    }

}

export default DeleteEntitlement