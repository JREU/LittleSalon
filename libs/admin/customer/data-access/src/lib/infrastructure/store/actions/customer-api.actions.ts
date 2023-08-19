import { CustomerDto } from "@admin/customer/models";
import { HttpErrorResponse } from "@angular/common/http";
import { createActionGroup, props } from "@ngrx/store";

export const customerApiActions = createActionGroup({
    source: 'Customer API',
    events: {
        customerLoadedSuccess: props<{ customers: CustomerDto[] }>(),
        customerLoadedFailure: props<{ error: HttpErrorResponse }>()
    }
})