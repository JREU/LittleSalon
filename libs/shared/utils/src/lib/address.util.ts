import { Address, AddressDto } from '@shared/models';

export class AddressUtil {
    /**
     * Convert an address dto to and address model
     * @param addressDto Address Data Transfer Object
     * @returns Address model
     */
    static toAddress(addressDto: AddressDto): Address {
        return {
            city: addressDto.city,
            houseNumber: addressDto.houseNumber,
            postalCode: addressDto.postalCode,
            street: addressDto.street
        };
    }
}