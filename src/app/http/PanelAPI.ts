class PanelAPI {

    public static readonly API_BASE = 'http://localhost:8082/services/v1/'

    public static DELETE_ENTITLEMENT = this.API_BASE + 'delete'
    public static UPDATE_ENTITLEMENT = this.API_BASE + 'edit'
    public static BUY_ENTITLEMENT = this.API_BASE + 'purchase'

    public static GET_ENTITLEMENTS = this.API_BASE + 'get/services/all'

}

export default PanelAPI