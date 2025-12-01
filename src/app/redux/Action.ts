import { AnyAction } from "redux";
import Entitlement from "../entitlements/Entitlement";
import DefaultAction from "./DefaultAction";

export type Action = DefaultAction<Entitlement[]> | AnyAction