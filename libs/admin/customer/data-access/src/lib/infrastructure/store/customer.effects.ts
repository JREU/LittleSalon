import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { customerPageActions } from "./actions/customer-page.actions";
import { customerApiActions } from "./actions/customer-api.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { CustomerService } from "../customer.service";

@Injectable()
export class CustomerEffects {
    private readonly actions$ = inject(Actions);
    private readonly customerService = inject(CustomerService);

    loadCustomers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(customerPageActions.loadCustomers),
            mergeMap(() => this.customerService.getCustomers().pipe(
                map((customers) => customerApiActions.customerLoadedSuccess({customers})),
                catchError(error => of(customerApiActions.customerLoadedFailure({error})))
            ))
        )
    });
}