import { Document } from 'mongoose';
export declare class Purchase extends Document {
    totalAmount: number;
    supplier: string;
    purchaseDate: Date;
    status: string;
    notes: string;
}
export declare const PurchaseSchema: import("mongoose").Schema<Purchase, import("mongoose").Model<Purchase, any, any, any, Document<unknown, any, Purchase> & Purchase & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Purchase, Document<unknown, {}, import("mongoose").FlatRecord<Purchase>> & import("mongoose").FlatRecord<Purchase> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
