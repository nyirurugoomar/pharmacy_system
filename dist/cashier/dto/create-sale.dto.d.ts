import { PaymentMethod } from '../schemas/sale.schema';
export declare class SaleItemDto {
    medicationName: string;
    quantity: number;
    unitPrice: number;
}
export declare class CreateSaleDto {
    items: SaleItemDto[];
    totalPrice: number;
    cashierId: string;
    paymentMethod: PaymentMethod;
}
