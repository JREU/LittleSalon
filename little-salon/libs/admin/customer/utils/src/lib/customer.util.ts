import { Customer, CustomerDto } from "@admin/customer/models";
import { AddressUtil } from "@shared/utils";

export class CustomerUtil {
    /**
     * Convert an array of Customer DTO to an array of Customer model
     * @param customerDtos Array of Customer Data Transfer Object
     * @returns Array of Customer model
     */
    static toCustomers(customerDtos: CustomerDto[]): Customer[]{
        return customerDtos.map(dtos => this.toCustomer(dtos));
    }

    /**
     * Convert an Customer DTO to a Customer model
     * @param customerDto Customer Data Transfer Object
     * @returns Customer Model
     */
    static toCustomer(customerDto: CustomerDto): Customer {        
        return {
            id: customerDto.id,
            email: customerDto.email,
            firstName: customerDto.firstName,
            lastName: customerDto.lastName,
            phoneNumber: customerDto.phoneNumber,
            address: AddressUtil.toAddress(customerDto.address)
        };
    }
}