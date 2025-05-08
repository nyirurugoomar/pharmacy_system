import { Document } from 'mongoose';
export type SaleDocument = Sale & Document;
export declare enum PaymentMethod {
    MOMO = "MOMO",
    CASH = "CASH",
    CARD = "POS"
}
export declare class SaleItem {
    medicationName: string;
    quantity: number;
    unitPrice: number;
}
export declare class Insurance {
    amount: number;
    status: string;
    provider: string;
}
export declare class Sale extends Document {
    amount: number;
    date: Date;
    paymentMethod: string;
    insurance?: Insurance;
    customerName: string;
    items: Array<{
        name: string;
        quantity: number;
        price: number;
    }>;
}
export declare const SaleSchema: import("mongoose").Schema<Sale, import("mongoose").Model<Sale, any, any, any, Document<unknown, any, Sale> & Sale & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sale, Document<unknown, {}, import("mongoose").FlatRecord<Sale>> & import("mongoose").FlatRecord<Sale> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
