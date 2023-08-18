import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
    {
        path: 'klanten',
        children: [
            {
                path: '',
                loadChildren: () => import('@admin/customer/list').then(m => m.FeatureListModule)
            },
            {
                path: ':customerId',
                loadChildren: () => import('@admin/customer/details').then(m => m.FeatureDetailsModule)
            }
        ]
    }
];
