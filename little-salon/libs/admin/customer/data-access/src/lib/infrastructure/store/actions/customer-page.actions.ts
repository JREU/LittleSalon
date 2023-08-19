import { createActionGroup, emptyProps } from "@ngrx/store";

export const customerPageActions = createActionGroup({
    source: 'Customer API',
    events: {
        loadCustomers: emptyProps
    }
})