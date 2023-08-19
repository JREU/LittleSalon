import { Route } from '@angular/router';

export const customerRoutes: Route[] = [
    {        
        path: '',
        loadComponent: () => import('@admin/customer/list').then(m => m.ListComponent)
    },
    {
        path: ':customerId',
        loadComponent: () => import('@admin/customer/details').then(m => m.DetailsComponent)
    }        
];
