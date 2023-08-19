import { Address } from '@shared/models';

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
}