import { AnyAction } from "redux";
import Entitlement from "../entitlements/Entitlement";
import DefaultAction from "./DefaultAction";

export type Action = DefaultAction<'update-entitlements', Entitlement[]> 
    | DefaultAction<'update-entitlement', Entitlement> 
    | DefaultAction<'delete-entitlement', string> 
