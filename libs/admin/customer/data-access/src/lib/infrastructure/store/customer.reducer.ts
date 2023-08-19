import { createReducer, on } from "@ngrx/store";
import { CustomerState } from "./customer.state";
import { customerApiActions } from "./actions/customer-api.actions";
import { CustomerUtil } from "@admin/customer/utils";

const initialState: CustomerState = {
    customers: null,
    activeCustomerId: null
};

export const customerReducer = createReducer<CustomerState>(
    initialState,
    on(customerApiActions.customerLoadedSuccess, (state, { customers}) => ({
        ...state,       
        customers: CustomerUtil.toCustomers(customers)
    }))
);