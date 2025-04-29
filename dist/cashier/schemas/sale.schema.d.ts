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
export declare class Sale {
    items: SaleItem[];
    totalPrice: number;
    cashierId: string;
    date: Date;
    paymentMethod: PaymentMethod;
}
export declare const SaleSchema: import("mongoose").Schema<Sale, import("mongoose").Model<Sale, any, any, any, Document<unknown, any, Sale> & Sale & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sale, Document<unknown, {}, import("mongoose").FlatRecord<Sale>> & import("mongoose").FlatRecord<Sale> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
