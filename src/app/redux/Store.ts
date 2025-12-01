import { configureStore } from "@reduxjs/toolkit"
import entitlements from "../entitlements/EntitlementReducer"

const store = configureStore({
    reducer: {
        entitlements
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store