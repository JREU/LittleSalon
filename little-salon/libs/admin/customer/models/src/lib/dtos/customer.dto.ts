import { AddressDto } from "@shared/models";

export interface CustomerDto {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: AddressDto;
    createdAtUTC: Date;
    createdBy: string;
    updatedAtUTC: Date | null;
    updatedBy: string | null;
}