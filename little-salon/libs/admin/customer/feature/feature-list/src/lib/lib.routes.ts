import { Route } from '@angular/router';
import { ListComponent } from './list/list.component';

export const customerListRoutes: Route[] = [
    {
        path: '',
        component: ListComponent        
    }
];
