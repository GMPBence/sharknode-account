class PanelAPI {

    public static readonly API_BASE = 'http://localhost:8082/services/v1/'

    public static DELETE_ENTITLEMENT = this.API_BASE + 'delete'
    public static UPDATE_ENTITLEMENT = this.API_BASE + 'edit'
    public static RENEW_ENTITLEMENT = this.API_BASE + 'renew'
    public static GET_ENTITLEMENTS = this.API_BASE + 'get/services/all'

    public static GET_ITEMS = this.API_BASE + 'get/categories'
    public static GET_PLANS = this.API_BASE + 'get/plans'

    public static BUY_PLAN = this.API_BASE + 'purchase'

}

export default PanelAPI