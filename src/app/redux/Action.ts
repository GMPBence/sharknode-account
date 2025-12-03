import { AnyAction } from "redux";
import Entitlement from "../entitlements/Entitlement";
import DefaultAction from "./DefaultAction";
import Item from "../items/Item";
import Plan from "../items/Plan";

export type Action = DefaultAction<'update-entitlements', Entitlement[]> 
    | DefaultAction<'update-entitlement', Entitlement> 
    | DefaultAction<'delete-entitlement', string> 

    | DefaultAction<'update-items', Item[]> 

    | DefaultAction<'update-plans', Plan[]> 
    | DefaultAction<'remove-plans', any> 
    