import { Route } from '@angular/router';
import { RouterUtil } from '@admin/shared/utils';

export const adminShellRoutes: Route[] = [
    {
        path: `${RouterUtil.paths.customers}`,
        loadChildren: () => import('@admin/customer/shell').then(m => m.CustomerShellModule)
    }
]