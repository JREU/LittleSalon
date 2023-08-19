import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { filterDefined } from '@shared/utils';
import { CustomerState } from "../infrastructure/store/customer.state";
import { Store } from "@ngrx/store";
import { Customer } from "@admin/customer/models";
import { customerFeature } from "../infrastructure/store/customer.feature";
import { customerPageActions } from "../infrastructure/store/actions/customer-page.actions";

@Injectable({
    providedIn: "root"
})
export class CustomerFacade {
    private readonly store: Store<CustomerState> = inject(Store<CustomerState>);
    private isLoaded = false;

    getCustomers(): Observable<Customer[]>{
        this.assertLoaded();
        return this.store.select(customerFeature.selectCustomers).pipe(filterDefined);
    }    

    /**
     * Assert that customers have been loaded, if they haven't been loaded load them
     */
    private assertLoaded(): void {
        if(this.isLoaded){
            return;
        }

        this.isLoaded = true;
        this.store.dispatch(customerPageActions.loadCustomers());
    }
}