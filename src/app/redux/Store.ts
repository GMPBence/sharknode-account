import { configureStore } from "@reduxjs/toolkit"
import entitlements from "../entitlements/EntitlementReducer"
import items from "../items/ItemReducer"
import plans from "../items/PlanReducer"

const store = configureStore({
    reducer: {
        entitlements,
        items,
        plans
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store