import { createFeature } from "@ngrx/store";
import { StoreUtil } from "@shared/utils";
import { customerReducer } from "./customer.reducer";

export const customerFeature = createFeature({
    name: StoreUtil.featureKeys.customer,
    reducer: customerReducer
});