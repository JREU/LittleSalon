import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
    {        
        path: '',
        loadComponent: () => import('@admin/customer/list').then(m => m.ListComponent)
    },
    {
        path: ':customerId',
        loadComponent: () => import('@admin/customer/details').then(m => m.DetailsComponent)
    }        
];
