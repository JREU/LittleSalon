import { AdminState } from '@admin/shared/data-access';
import { Customer } from '@admin/customer/models';

export interface State extends AdminState {
    customer: CustomerState;
}

/**
 * Customer slice details
 */
export interface CustomerState {
    customers: Customer[] | null;
    activeCustomerId: number | null;
}