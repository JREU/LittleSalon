import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { CustomerDto } from "@admin/customer/models";

@Injectable()
export class CustomerService {
    private readonly httpClient = inject(HttpClient);

    getCustomers(): Observable<CustomerDto[]>{
        // Return dummy data for now, later implement a http service to call an API.
        return of([
            {
                id: 1,
                firstName: 'John',
                lastName: 'Snow',
                phoneNumber: '+31612345678',
                email: 'john.snow@got.com',
                address: {
                    street: 'Castle black road',
                    houseNumber: '1',
                    postalCode: '6667 GW',
                    city: 'Castle black'
                },
                createdAtUTC: new Date(),
                createdBy: '138c51e2-544a-4138-9b7c-f8051432e1d2',
                updatedAtUTC: null,
                updatedBy: null
            },
            {
                id: 2,
                firstName: 'Rob',
                lastName: 'Stark',
                phoneNumber: '+31612345678',
                email: 'rob.stark@got.com',
                address: {
                    street: 'Winterfell lane',
                    houseNumber: '1',
                    postalCode: '1234 WF',
                    city: 'Winterfell'
                },
                createdAtUTC: new Date(),
                createdBy: '4bdf9aa4-6a24-4dc2-8747-6b30f5d77734',
                updatedAtUTC: new Date(),
                updatedBy: '138c51e2-544a-4138-9b7c-f8051432e1d2'
            }
        ]);
    }
}